import { useEffect, useState } from 'react';
import { Palette, SlidersHorizontal } from 'lucide-react';

const setThemeVars = (primaryHue: number, secondaryHue: number) => {
  const root = document.documentElement;

  root.style.setProperty('--primary', `${primaryHue} 85% 45%`);
  root.style.setProperty('--secondary', `${secondaryHue} 70% 55%`);
  root.style.setProperty('--accent', `${(primaryHue + 6) % 360} 80% 55%`);
  root.style.setProperty('--ring', `${primaryHue} 85% 45%`);

  root.style.setProperty('--sidebar-primary', `${primaryHue} 85% 45%`);
  root.style.setProperty('--sidebar-ring', `${primaryHue} 85% 45%`);

  root.style.setProperty('--glow-primary', `${primaryHue} 85% 45%`);
  root.style.setProperty('--glow-secondary', `${secondaryHue} 70% 50%`);

  root.style.setProperty('--gradient-start', `${(primaryHue + 355) % 360} 80% 40%`);
  root.style.setProperty('--gradient-mid', `${primaryHue} 85% 45%`);
  root.style.setProperty('--gradient-end', `${secondaryHue} 70% 50%`);
};

const resetThemeVars = () => {
  const root = document.documentElement;
  const keys = [
    '--primary',
    '--secondary',
    '--accent',
    '--ring',
    '--sidebar-primary',
    '--sidebar-ring',
    '--glow-primary',
    '--glow-secondary',
    '--gradient-start',
    '--gradient-mid',
    '--gradient-end',
  ];

  keys.forEach((key) => root.style.removeProperty(key));
};

const ThemeStudio = () => {
  const [open, setOpen] = useState(false);
  const [primaryHue, setPrimaryHue] = useState<number>(275);
  const [secondaryHue, setSecondaryHue] = useState<number>(300);

  const closePalette = () => setOpen(false);

  useEffect(() => {
    const savedPrimary = Number(localStorage.getItem('theme-primary-hue'));
    const savedSecondary = Number(localStorage.getItem('theme-secondary-hue'));

    if (!Number.isNaN(savedPrimary) && savedPrimary >= 0 && savedPrimary <= 360) {
      setPrimaryHue(savedPrimary);
    }
    if (!Number.isNaN(savedSecondary) && savedSecondary >= 0 && savedSecondary <= 360) {
      setSecondaryHue(savedSecondary);
    }
  }, []);

  useEffect(() => {
    setThemeVars(primaryHue, secondaryHue);
    localStorage.setItem('theme-primary-hue', String(primaryHue));
    localStorage.setItem('theme-secondary-hue', String(secondaryHue));
  }, [primaryHue, secondaryHue]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[70] glass glass-hover px-4 py-3 text-sm font-semibold text-foreground flex items-center gap-2"
        aria-label="Open theme studio"
      >
        <Palette size={16} className="text-primary" />
        Theme Studio
      </button>

      <aside
        className={`fixed top-20 right-4 z-[70] w-[min(92vw,320px)] glass-strong p-5 transition-all duration-500 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal size={16} className="text-primary" />
          <p className="font-semibold">Dynamic Theme Colors</p>
        </div>

        <p className="text-xs text-muted-foreground mb-4">
          Adjust brand colors live while keeping the existing liquid-glass style.
        </p>

        <label htmlFor="primary-hue" className="block text-xs font-semibold mb-2">
          Primary Hue: {primaryHue}
        </label>
        <input
          id="primary-hue"
          type="range"
          min={0}
          max={360}
          step={1}
          value={primaryHue}
          onChange={(event) => setPrimaryHue(Number(event.target.value))}
          onMouseUp={closePalette}
          onTouchEnd={closePalette}
          onKeyUp={(event) => {
            if (event.key === 'Enter' || event.key === ' ') closePalette();
          }}
          className="w-full accent-primary mb-4"
        />

        <label htmlFor="secondary-hue" className="block text-xs font-semibold mb-2">
          Secondary Hue: {secondaryHue}
        </label>
        <input
          id="secondary-hue"
          type="range"
          min={0}
          max={360}
          step={1}
          value={secondaryHue}
          onChange={(event) => setSecondaryHue(Number(event.target.value))}
          onMouseUp={closePalette}
          onTouchEnd={closePalette}
          onKeyUp={(event) => {
            if (event.key === 'Enter' || event.key === ' ') closePalette();
          }}
          className="w-full accent-primary mb-5"
        />

        <button
          type="button"
          onClick={() => {
            setPrimaryHue(275);
            setSecondaryHue(300);
            localStorage.removeItem('theme-primary-hue');
            localStorage.removeItem('theme-secondary-hue');
            resetThemeVars();
          }}
          className="w-full px-3 py-2 rounded-xl border border-border text-sm hover:bg-primary/10 transition-colors"
        >
          Reset Default Colors
        </button>
      </aside>
    </>
  );
};

export default ThemeStudio;
