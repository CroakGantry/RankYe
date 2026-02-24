import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronLeft, Trophy, Play, Pause, GripVertical } from 'lucide-react';
import { cn } from '../../lib/utils';
import { kanyeSongs, type Song } from '../../data/kanye-music';
import { useAudioPreview } from '../../hooks/use-audio-preview';

const STORAGE_KEY = 'rankye-song-order-v2';

type SongRankingSystemProps = {
  initialSongs?: Song[];
  onBack?: () => void;
};

const defaultSongs: Song[] = kanyeSongs;

const loadSavedOrder = (defaultSongList: Song[]): Song[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const savedOrder: string[] = JSON.parse(saved);
      const songMap = new Map(defaultSongList.map(s => [s.id, s]));
      const reorderedSongs: Song[] = [];
      savedOrder.forEach((id, index) => {
        const song = songMap.get(id);
        if (song) {
          reorderedSongs.push({ ...song, rank: index + 1 });
          songMap.delete(id);
        }
      });
      songMap.forEach(song => {
        reorderedSongs.push({ ...song, rank: reorderedSongs.length + 1 });
      });
      return reorderedSongs;
    }
  } catch (e) {
    console.error('Failed to load saved rankings:', e);
  }
  return defaultSongList;
};

const AudioWave = () => (
  <div className="flex items-center gap-[2px] h-3">
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="w-[2px] bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full"
        animate={{
          height: ['6px', '12px', '6px'],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: i * 0.1,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// @component: SongRankingSystem
export const SongRankingSystem = ({
  initialSongs = defaultSongs,
  onBack
}: SongRankingSystemProps) => {
  const [songs, setSongs] = useState<Song[]>(() => loadSavedOrder(initialSongs));
  const [previewUrls] = useState<Map<string, string>>(() => {
    const map = new Map<string, string>();
    initialSongs.forEach(song => {
      if (song.previewUrl) {
        map.set(song.id, song.previewUrl);
      }
    });
    return map;
  });
  const { currentlyPlaying, toggle } = useAudioPreview();

  const [editingRankId, setEditingRankId] = useState<string | null>(null);
  const [editingRankValue, setEditingRankValue] = useState<string>('');
  const rankInputRef = useRef<HTMLInputElement>(null);

  // Drag state
  const [draggedSongId, setDraggedSongId] = useState<string | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const songOrder = songs.map(s => s.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(songOrder));
    } catch (e) {
      console.error('Failed to save rankings:', e);
    }
  }, [songs]);

  const moveSong = useCallback((songId: string, direction: 'up' | 'down') => {
    setSongs(prevSongs => {
      const currentIndex = prevSongs.findIndex(s => s.id === songId);
      if (currentIndex === -1) return prevSongs;
      if (direction === 'up' && currentIndex === 0) return prevSongs;
      if (direction === 'down' && currentIndex === prevSongs.length - 1) return prevSongs;
      const newSongs = [...prevSongs];
      const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      [newSongs[currentIndex], newSongs[targetIndex]] = [newSongs[targetIndex], newSongs[currentIndex]];
      return newSongs.map((song, index) => ({
        ...song,
        rank: index + 1,
        change: index < currentIndex ? 'down' as const : index > currentIndex ? 'up' as const : song.change
      }));
    });
  }, []);

  const moveSongToPosition = useCallback((songId: string, targetPosition: number) => {
    setSongs(prevSongs => {
      const currentIndex = prevSongs.findIndex(s => s.id === songId);
      if (currentIndex === -1) return prevSongs;
      const targetIndex = Math.max(0, Math.min(targetPosition - 1, prevSongs.length - 1));
      if (currentIndex === targetIndex) return prevSongs;
      const newSongs = [...prevSongs];
      const [movedSong] = newSongs.splice(currentIndex, 1);
      newSongs.splice(targetIndex, 0, movedSong);
      return newSongs.map((song, index) => ({
        ...song,
        rank: index + 1
      }));
    });
  }, []);

  const startEditingRank = (songId: string, currentRank: number) => {
    setEditingRankId(songId);
    setEditingRankValue(currentRank.toString());
    setTimeout(() => {
      rankInputRef.current?.focus();
      rankInputRef.current?.select();
    }, 0);
  };

  const confirmRankEdit = () => {
    if (editingRankId) {
      const newPosition = parseInt(editingRankValue, 10);
      if (!isNaN(newPosition) && newPosition >= 1 && newPosition <= songs.length) {
        moveSongToPosition(editingRankId, newPosition);
      }
      setEditingRankId(null);
      setEditingRankValue('');
    }
  };

  const handleRankInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      confirmRankEdit();
    } else if (e.key === 'Escape') {
      setEditingRankId(null);
      setEditingRankValue('');
    }
  };

  const clearDragState = useCallback(() => {
    setDraggedSongId(null);
    setDragOverIndex(null);
  }, []);

  const handleDragStart = (e: React.DragEvent, songId: string) => {
    setDraggedSongId(songId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', songId);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragEnd = () => {
    clearDragState();
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedSongId) {
      moveSongToPosition(draggedSongId, targetIndex + 1);
    }
    clearDragState();
  };

  useEffect(() => {
    const onMouseUp = () => {
      if (draggedSongId) clearDragState();
    };
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, [draggedSongId, clearDragState]);

  return <div className="min-h-screen bg-[#0f0f0f] py-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className={cn(
                'w-9 h-9 rounded-full flex items-center justify-center',
                'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]',
                'border border-white/10 hover:border-white/20',
                'text-white transition-all duration-300',
                'hover:shadow-lg hover:shadow-orange-500/20',
                'hover:scale-110 active:scale-95'
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-3xl font-bold text-white">Top Songs</h1>
          <span className="text-sm text-gray-500 ml-auto">{songs.length} songs</span>
        </div>

        {/* Awards Section - compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-4 border border-yellow-500/20">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              {songs.length > 0 && (
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={songs[0].image} alt={songs[0].title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold text-yellow-500">TOP SONG</h3>
                    <p className="text-sm font-bold text-white truncate">{songs[0].title}</p>
                    <p className="text-gray-400 text-xs truncate">{songs[0].artist}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-4 border border-yellow-500/20">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              {(() => {
                const top10Songs = songs.filter(s => s.rank <= 10);
                const albumCounts = top10Songs.reduce((acc, song) => {
                  acc[song.album] = (acc[song.album] || 0) + 1;
                  return acc;
                }, {} as Record<string, number>);
                const topAlbumEntry = Object.entries(albumCounts).sort((a, b) => b[1] - a[1])[0];
                if (topAlbumEntry) {
                  const [albumName, count] = topAlbumEntry;
                  const albumSong = top10Songs.find(s => s.album === albumName);
                  return (
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {albumSong && (
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={albumSong.image} alt={albumName} className="w-full h-full object-cover" crossOrigin="anonymous" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-yellow-500">BEST ALBUM IN TOP 10</h3>
                        <p className="text-sm font-bold text-white truncate">{albumName}</p>
                        <p className="text-gray-400 text-xs">{count} song{count > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  );
                }
                return <p className="text-gray-400 text-sm">No data available</p>;
              })()}
            </div>
          </div>
        </div>

        {/* Song Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2">
          {songs.map((song, index) => {
            const previewUrl = previewUrls.get(song.id);
            const isPlaying = currentlyPlaying === song.id;
            const hasPreview = !!previewUrl;
            const isDragged = draggedSongId === song.id;
            const isDragOver = dragOverIndex === index;

            return (
              <div
                key={song.id}
                draggable
                onDragStart={(e) => handleDragStart(e, song.id)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                onDrop={(e) => handleDrop(e, index)}
                className={cn(
                  'group relative bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-lg overflow-hidden',
                  'border transition-all duration-200 cursor-grab active:cursor-grabbing',
                  isDragged && 'opacity-40 scale-95',
                  isDragOver && !isDragged && 'border-cyan-400/60 scale-[1.02]',
                  isPlaying
                    ? 'border-cyan-500/50 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-500/30'
                    : 'border-white/5 hover:border-white/15'
                )}
              >
                {/* Album Art + Play overlay */}
                <div
                  className={cn(
                    "relative aspect-square cursor-pointer",
                    !hasPreview && "cursor-default"
                  )}
                  onClick={() => hasPreview && toggle(song.id, previewUrl)}
                >
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                    draggable={false}
                  />

                  {/* Playing tint */}
                  {isPlaying && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-purple-500/40 mix-blend-multiply" />
                  )}

                  {/* Play/Pause overlay */}
                  {hasPreview && (
                    <div className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-150",
                      isPlaying
                        ? "bg-black/30"
                        : "bg-black/0 group-hover:bg-black/40"
                    )}>
                      {isPlaying ? (
                        <div className="flex items-center gap-1">
                          <AudioWave />
                        </div>
                      ) : (
                        <Play className={cn(
                          "w-7 h-7 text-white drop-shadow-lg transition-all duration-150",
                          "opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"
                        )} fill="white" />
                      )}
                    </div>
                  )}

                  {/* Rank badge - top left */}
                  <div className="absolute top-1 left-1">
                    {editingRankId === song.id ? (
                      <input
                        ref={rankInputRef}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoFocus
                        value={editingRankValue}
                        onChange={(e) => setEditingRankValue(e.target.value.replace(/[^0-9]/g, ''))}
                        onBlur={confirmRankEdit}
                        onKeyDown={handleRankInputKeyDown}
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                          "w-10 h-7 text-center text-sm font-black bg-black/80 text-white",
                          "border border-cyan-400 rounded outline-none backdrop-blur-sm"
                        )}
                      />
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditingRank(song.id, song.rank);
                        }}
                        className={cn(
                          "min-w-[1.75rem] h-7 px-1.5 text-sm font-black rounded",
                          "bg-black/70 backdrop-blur-sm text-white",
                          "hover:bg-cyan-500/80 hover:text-white transition-colors duration-150",
                          "border border-white/10 hover:border-cyan-400/60"
                        )}
                        title="Click to jump to rank"
                      >
                        {song.rank}
                      </button>
                    )}
                  </div>

                  {/* Drag handle - top right */}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-70 transition-opacity">
                    <GripVertical className="w-4 h-4 text-white drop-shadow" />
                  </div>
                </div>

                {/* Song info + controls */}
                <div className="p-2">
                  <div
                    className={cn("cursor-pointer", hasPreview && "hover:opacity-80")}
                    onClick={() => hasPreview && toggle(song.id, previewUrl)}
                  >
                    <h3 className="text-xs font-semibold text-white truncate leading-tight">
                      {song.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 truncate mt-0.5">
                      {song.album}
                    </p>
                  </div>

                  {/* Up/Down controls */}
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex gap-1">
                      <button
                        onClick={(e) => { e.stopPropagation(); moveSong(song.id, 'up'); }}
                        disabled={index === 0}
                        className={cn(
                          'w-6 h-6 rounded flex items-center justify-center transition-all duration-150',
                          'border border-white/10',
                          index === 0
                            ? 'opacity-20 cursor-not-allowed'
                            : 'hover:border-cyan-400/50 hover:bg-cyan-400/10 active:scale-90'
                        )}
                      >
                        <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); moveSong(song.id, 'down'); }}
                        disabled={index === songs.length - 1}
                        className={cn(
                          'w-6 h-6 rounded flex items-center justify-center transition-all duration-150',
                          'border border-white/10',
                          index === songs.length - 1
                            ? 'opacity-20 cursor-not-allowed'
                            : 'hover:border-orange-400/50 hover:bg-orange-400/10 active:scale-90'
                        )}
                      >
                        <ChevronDown className="w-3.5 h-3.5 text-orange-400" />
                      </button>
                    </div>
                    {isPlaying && (
                      <button
                        onClick={(e) => { e.stopPropagation(); toggle(song.id, previewUrl); }}
                        className="w-6 h-6 rounded flex items-center justify-center bg-cyan-500/20 border border-cyan-500/30"
                      >
                        <Pause className="w-3 h-3 text-cyan-400" fill="currentColor" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>;
};