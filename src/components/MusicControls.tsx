import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export const MusicControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_4e156b6906.mp3"
      />
      
      <Button
        variant="secondary"
        size="icon"
        onClick={togglePlay}
        className="glass-effect shadow-lg hover:shadow-primary/20"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="h-4 w-4 flex gap-1">
            <div className="w-1 h-full bg-foreground animate-pulse" />
            <div className="w-1 h-full bg-foreground animate-pulse" style={{ animationDelay: "0.2s" }} />
          </div>
        ) : (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </Button>

      {isPlaying && (
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleMute}
          className="glass-effect shadow-lg hover:shadow-primary/20 animate-fade-in"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
};
