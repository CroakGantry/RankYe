import { useState, useRef, useCallback, useEffect } from 'react';

type UseAudioPreviewReturn = {
  currentlyPlaying: string | null;
  isLoading: boolean;
  play: (songId: string, previewUrl: string) => void;
  pause: () => void;
  toggle: (songId: string, previewUrl: string | undefined) => void;
};

export function useAudioPreview(): UseAudioPreviewReturn {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element once
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5;

    const audio = audioRef.current;

    const handleEnded = () => {
      setCurrentlyPlaying(null);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setCurrentlyPlaying(null);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = useCallback((songId: string, previewUrl: string) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // If same song, just resume
    if (audio.src === previewUrl && audio.paused) {
      audio.play();
      setCurrentlyPlaying(songId);
      return;
    }

    // New song - load and play
    setIsLoading(true);
    audio.src = previewUrl;
    audio.play().catch(() => {
      setIsLoading(false);
      setCurrentlyPlaying(null);
    });
    setCurrentlyPlaying(songId);
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setCurrentlyPlaying(null);
  }, []);

  const toggle = useCallback((songId: string, previewUrl: string | undefined) => {
    if (!previewUrl) return;

    if (currentlyPlaying === songId) {
      pause();
    } else {
      play(songId, previewUrl);
    }
  }, [currentlyPlaying, pause, play]);

  return {
    currentlyPlaying,
    isLoading,
    play,
    pause,
    toggle,
  };
}


