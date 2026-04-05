import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Premium whoosh-up sound
  const playClickSound = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const now = ctx.currentTime;

      // Rising sweep
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(200, now);
      osc1.frequency.exponentialRampToValueAtTime(800, now + 0.15);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc1.start(now);
      osc1.stop(now + 0.2);

      // Bright chime
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1200, now + 0.05);
      osc2.frequency.exponentialRampToValueAtTime(2400, now + 0.12);
      gain2.gain.setValueAtTime(0.08, now + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc2.start(now + 0.05);
      osc2.stop(now + 0.18);
    } catch (e) {
      // Audio context not available or failed
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-out
        group
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
        }
      `}
      style={{ padding: '3px' }}
    >
      {/* Spinning border gradient */}
      <div className="spinning-gradient rounded-full" />
      <div className="spinning-gradient-glow rounded-full group-hover:opacity-100" />

      {/* Button inner */}
      <div
        className="relative z-10 w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_30px_hsla(var(--glow-primary),0.5)]"
        style={{ background: 'hsl(225, 25%, 8%)' }}
      >
        <ArrowUp
          size={24}
          className="text-primary transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_8px_hsla(var(--glow-primary),0.6)]"
        />
      </div>
    </button>
  );
};

export default ScrollToTop;
