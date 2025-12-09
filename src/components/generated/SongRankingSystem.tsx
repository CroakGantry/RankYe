import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronLeft, Trophy } from 'lucide-react';
import { cn } from '../../lib/utils';
import { kanyeSongs, type Song } from '../../data/kanye-music';

const STORAGE_KEY = 'rankye-song-order';

type SongRankingSystemProps = {
  initialSongs?: Song[];
  onBack?: () => void;
};

const defaultSongs: Song[] = kanyeSongs;

// Helper to load saved order from localStorage
const loadSavedOrder = (defaultSongList: Song[]): Song[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const savedOrder: string[] = JSON.parse(saved);
      // Reorder songs based on saved order
      const songMap = new Map(defaultSongList.map(s => [s.id, s]));
      const reorderedSongs: Song[] = [];
      savedOrder.forEach((id, index) => {
        const song = songMap.get(id);
        if (song) {
          reorderedSongs.push({ ...song, rank: index + 1 });
          songMap.delete(id);
        }
      });
      // Add any new songs that weren't in saved order
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

// @component: SongRankingSystem
export const SongRankingSystem = ({
  initialSongs = defaultSongs,
  onBack
}: SongRankingSystemProps) => {
  const [songs, setSongs] = useState<Song[]>(() => loadSavedOrder(initialSongs));

  // Save to localStorage whenever songs order changes
  useEffect(() => {
    try {
      const songOrder = songs.map(s => s.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(songOrder));
    } catch (e) {
      console.error('Failed to save rankings:', e);
    }
  }, [songs]);

  const moveSong = (songId: string, direction: 'up' | 'down') => {
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
  };

  // @return
  return <div className="min-h-screen bg-[#0f0f0f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center',
                'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]',
                'border border-white/10 hover:border-white/20',
                'text-white',
                'transition-all duration-300',
                'hover:shadow-lg hover:shadow-orange-500/20',
                'hover:scale-110 active:scale-95'
              )}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-4xl font-bold text-white">Top Songs</h1>
        </div>

        <div className="bg-[#0f0f0f] p-4 rounded-xl">
          {/* Awards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Top Song Award */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 border border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-yellow-500 mb-2">TOP SONG</h3>
                  {songs.length > 0 && <>
                    <p className="text-xl font-bold text-white mb-1">{songs[0].title}</p>
                    <p className="text-gray-400 text-sm">{songs[0].artist}</p>
                    <div className="mt-4 w-20 h-20 rounded-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 via-amber-500/40 to-orange-500/40 mix-blend-multiply" />
                        <img src={songs[0].image} alt={songs[0].title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                      </div>
                    </div>
                  </>}
                </div>
              </div>
            </div>

            {/* Album with Most Top 10 Songs */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 border border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-yellow-500 mb-2">ALBUM WITH MOST TOP 10 SONGS</h3>
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
                      return <>
                        <p className="text-xl font-bold text-white mb-1">{albumName}</p>
                        <p className="text-gray-400 text-sm">{count} song{count > 1 ? 's' : ''} in Top 10</p>
                        {albumSong && <div className="mt-4 w-20 h-20 rounded-lg overflow-hidden">
                          <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 via-amber-500/40 to-orange-500/40 mix-blend-multiply" />
                            <img src={albumSong.image} alt={albumName} className="w-full h-full object-cover" crossOrigin="anonymous" />
                          </div>
                        </div>}
                      </>;
                    }
                    return <p className="text-gray-400 text-sm">No data available</p>;
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* Song Cards - Top 10 with controls */}
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {songs.slice(0, 10).map((song, index) => (
                <motion.div 
                  key={song.id} 
                  layout 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    y: { duration: 0.2 }
                  }} 
                  className={cn(
                    'group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl overflow-hidden',
                    'border border-white/5 hover:border-cyan-500/30 transition-all duration-300',
                    'hover:shadow-lg hover:shadow-cyan-500/10'
                  )}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <motion.span 
                        key={`rank-${song.rank}`} 
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-black text-white"
                      >
                        {song.rank}
                      </motion.span>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 via-orange-500/40 to-pink-500/40 mix-blend-multiply" />
                        <img src={song.image} alt={song.title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white truncate mb-1">{song.title}</h3>
                      <p className="text-gray-400 truncate">{song.artist} • {song.album}</p>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => moveSong(song.id, 'up')} 
                        disabled={index === 0} 
                        className={cn(
                          'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
                          'border border-white/10 hover:border-cyan-400/50',
                          index === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-400/10 hover:scale-110'
                        )}
                      >
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      </button>
                      <button 
                        onClick={() => moveSong(song.id, 'down')} 
                        disabled={index === songs.length - 1} 
                        className={cn(
                          'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
                          'border border-white/10 hover:border-orange-400/50',
                          index === songs.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-orange-400/10 hover:scale-110'
                        )}
                      >
                        <ChevronDown className="w-5 h-5 text-orange-400" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>;
};