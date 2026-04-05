import { useEffect, useRef, useCallback } from 'react';

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<{ x: number; y: number }[]>([]);
  const isClicking = useRef(false);
  const isHovering = useRef(false);
  const animFrame = useRef<number>(0);

  const TRAIL_COUNT = 6;

  const createNoiseBuffer = (ctx: AudioContext, duration = 0.08) => {
    const length = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  };

  const playClickVariant = (ctx: AudioContext, variant: number, now: number) => {
    if (variant === 0) {
      // Deep + bright premium click
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(240, now);
      osc1.frequency.exponentialRampToValueAtTime(170, now + 0.09);
      gain1.gain.setValueAtTime(0.24, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc1.start(now);
      osc1.stop(now + 0.11);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1600, now + 0.01);
      osc2.frequency.exponentialRampToValueAtTime(900, now + 0.07);
      gain2.gain.setValueAtTime(0.09, now + 0.01);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc2.start(now + 0.01);
      osc2.stop(now + 0.1);
      return;
    }

    if (variant === 1) {
      // Fast water-drip style (triple droplet)
      const dripTimes = [0, 0.045, 0.085];
      dripTimes.forEach((t, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        filter.type = 'bandpass';
        filter.frequency.value = 1200 + i * 300;
        filter.Q.value = 8;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400 + i * 280, now + t);
        osc.frequency.exponentialRampToValueAtTime(450 + i * 80, now + t + 0.05);

        gain.gain.setValueAtTime(0, now + t);
        gain.gain.linearRampToValueAtTime(0.12 - i * 0.02, now + t + 0.004);
        gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.06);

        osc.start(now + t);
        osc.stop(now + t + 0.06);
      });
      return;
    }

    if (variant === 2) {
      // Crisp UI snap with airy noise tail
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'square';
      osc.frequency.setValueAtTime(780, now);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);

      const noise = ctx.createBufferSource();
      noise.buffer = createNoiseBuffer(ctx, 0.09);
      const noiseFilter = ctx.createBiquadFilter();
      const noiseGain = ctx.createGain();
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noiseFilter.type = 'highpass';
      noiseFilter.frequency.value = 1800;
      noiseGain.gain.setValueAtTime(0.035, now + 0.01);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      noise.start(now + 0.005);
      noise.stop(now + 0.1);
      return;
    }

    // Soft glass tap
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    filter.type = 'lowpass';
    filter.frequency.value = 2600;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(980, now);
    osc.frequency.exponentialRampToValueAtTime(620, now + 0.08);
    gain.gain.setValueAtTime(0.13, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
    osc.start(now);
    osc.stop(now + 0.11);
  };

  const playClickSound = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const now = ctx.currentTime;
      const variant = Math.floor(Math.random() * 4);
      playClickVariant(ctx, variant, now);
    } catch (e) {
      // Audio context not available or failed
    }
  }, []);

  useEffect(() => {
    // Initialize trail positions
    for (let i = 0; i < TRAIL_COUNT; i++) {
      trailPositions.current.push({ x: 0, y: 0 });
    }

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => {
      isClicking.current = true;
      playClickSound();

      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.6)';
      }
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.8)';
        ringRef.current.style.borderColor = 'hsla(var(--glow-primary), 0.8)';
        ringRef.current.style.boxShadow = '0 0 20px hsla(var(--glow-primary), 0.4), inset 0 0 20px hsla(var(--glow-primary), 0.1)';
      }
    };

    const onMouseUp = () => {
      isClicking.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        ringRef.current.style.borderColor = 'hsla(var(--glow-primary), 0.4)';
        ringRef.current.style.boxShadow = '0 0 10px hsla(var(--glow-primary), 0.2)';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, select, [role="button"], [onclick]');
      if (interactive) {
        isHovering.current = true;
        if (cursorRef.current) {
          cursorRef.current.style.background = 'hsla(var(--glow-secondary), 0.9)';
          cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorRef.current.style.boxShadow = '0 0 15px hsla(var(--glow-secondary), 0.6)';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '50px';
          ringRef.current.style.height = '50px';
          ringRef.current.style.borderColor = 'hsla(var(--glow-secondary), 0.5)';
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, select, [role="button"], [onclick]');
      if (interactive) {
        isHovering.current = false;
        if (cursorRef.current) {
          cursorRef.current.style.background = 'hsla(var(--glow-primary), 0.9)';
          cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorRef.current.style.boxShadow = '0 0 10px hsla(var(--glow-primary), 0.5)';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '36px';
          ringRef.current.style.height = '36px';
          ringRef.current.style.borderColor = 'hsla(var(--glow-primary), 0.4)';
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Smooth follow for ring
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      // Trail
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target = i === 0 ? pos.current : trailPositions.current[i - 1];
        const speed = 0.2 - i * 0.02;
        trailPositions.current[i].x += (target.x - trailPositions.current[i].x) * speed;
        trailPositions.current[i].y += (target.y - trailPositions.current[i].y) * speed;

        const trail = trailRefs.current[i];
        if (trail) {
          trail.style.left = `${trailPositions.current[i].x}px`;
          trail.style.top = `${trailPositions.current[i].y}px`;
        }
      }

      animFrame.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [playClickSound]);

  // Only render on non-touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => { if (el) trailRefs.current[i] = el; }}
          className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${4 - i * 0.5}px`,
            height: `${4 - i * 0.5}px`,
            background: `hsla(var(--glow-primary), ${0.3 - i * 0.04})`,
            boxShadow: `0 0 ${6 - i}px hsla(var(--glow-primary), ${0.2 - i * 0.03})`,
            transition: 'none',
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '36px',
          height: '36px',
          border: '2px solid hsla(var(--glow-primary), 0.4)',
          boxShadow: '0 0 10px hsla(var(--glow-primary), 0.2)',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorRef}
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '8px',
          height: '8px',
          background: 'hsla(var(--glow-primary), 0.9)',
          boxShadow: '0 0 10px hsla(var(--glow-primary), 0.5)',
          transition: 'transform 0.15s ease, background 0.3s ease, box-shadow 0.3s ease',
        }}
      />
    </div>
  );
};

export default CustomCursor;
