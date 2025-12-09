import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { albums } from '../../data/kanye-music';

type RankKanyeHomeProps = {
  onProceed: () => void;
};

export const RankKanyeHome = ({
  onProceed
}: RankKanyeHomeProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Collect all songs with preview URLs
  const songsWithPreviews = useMemo(() => {
    const songs: { title: string; previewUrl: string; album: string }[] = [];
    albums.forEach((album) => {
      album.songs.forEach((song) => {
        if (song.previewUrl) {
          songs.push({
            title: song.title,
            previewUrl: song.previewUrl,
            album: album.title,
          });
        }
      });
    });
    return songs;
  }, []);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  // Play a random song
  const playRandomSong = useCallback(() => {
    if (songsWithPreviews.length === 0) return;

    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    const randomIndex = Math.floor(Math.random() * songsWithPreviews.length);
    const randomSong = songsWithPreviews[randomIndex];

    const audio = new Audio(randomSong.previewUrl);
    audio.volume = 0.3;
    audioRef.current = audio;

    audio.addEventListener('ended', () => setIsPlaying(false));

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [songsWithPreviews]);

  // Stop audio
  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      setIsPlaying(false);
    }
  }, []);

  // Handle single click - play random song
  const handleClick = useCallback(() => {
    playRandomSong();
  }, [playRandomSong]);

  // Handle double click - stop audio
  const handleDoubleClick = useCallback(() => {
    stopAudio();
  }, [stopAudio]);

  // Stop audio when proceeding
  const handleProceed = () => {
    stopAudio();
    onProceed();
  };

  return <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center">
          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-6xl md:text-8xl font-black text-white mb-8 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            RankYe
          </motion.h1>

          {/* Music Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            {/* Play / Next button */}
            <button
              onClick={handleClick}
              className="relative group"
              title={isPlaying ? "Play next sample" : "Play a sample"}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-red-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/40">
                {isPlaying ? (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4v16l10-8L6 4z" />
                    <rect x="17" y="4" width="3" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-500/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </button>

            {/* Pause button - only shown when playing */}
            {isPlaying && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={stopAudio}
                className="relative group"
                title="Stop"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-red-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/40">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" rx="1" />
                  </svg>
                </div>
              </motion.button>
            )}
          </motion.div>

          {/* Kanye Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="mb-12 flex justify-center">
            <div className="relative w-64 h-96 md:w-80 md:h-[30rem] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-orange-500/30 to-pink-500/30 mix-blend-multiply" />
              <img src="/RankYeHome.jpg" alt="Kanye West" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-2xl" />
            </div>
          </motion.div>

          {/* Proceed Button */}
          <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} onClick={handleProceed} className="group relative px-12 py-5 text-xl font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-orange-600 to-red-500 transition-all duration-300 group-hover:scale-110" />
            
            {/* Button Text */}
            <span className="relative z-10 flex items-center gap-3">
              Start Ranking
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>;
};