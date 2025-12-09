import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            className="mb-8 flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Play / Next button */}
              <motion.button
                animate={{ x: isPlaying ? -30 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={handleClick}
                className="relative group"
                title={isPlaying ? "Play next sample" : "Play a sample"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20">
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.svg 
                        key="next"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        className="w-6 h-6 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4v16l10-8L6 4z" />
                        <rect x="17" y="4" width="3" height="16" rx="1" />
                      </motion.svg>
                    ) : (
                      <motion.svg 
                        key="play"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        className="w-6 h-6 text-white ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ 
                        scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute inset-0 rounded-full border-2 border-red-500/50"
                    />
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Stop button - appears/disappears when playing */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 30 }}
                    exit={{ opacity: 0, scale: 0, x: 30 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={stopAudio}
                    className="absolute group"
                    title="Stop"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20">
                      <motion.svg 
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25, delay: 0.1 }}
                        className="w-6 h-6 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <rect x="6" y="6" width="12" height="12" rx="2" />
                      </motion.svg>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
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