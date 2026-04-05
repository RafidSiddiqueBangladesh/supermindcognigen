import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Sun, Moon, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { useLang } from '@/hooks/useLang';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'profile', label: lang === 'en' ? 'Profile' : 'প্রোফাইল' },
    { id: 'skills', label: t.navSkills },
    { id: 'competitions', label: t.navCompetitions },
    { id: 'projects', label: t.navProjects },
    { id: 'timeline', label: t.navExperience },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass border-b-[3px] border-primary/40 shadow-[0_4px_40px_hsla(var(--glow-primary),0.25),0_0_80px_hsla(var(--glow-primary),0.1)]' : 'bg-transparent border-b-[3px] border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold gradient-text flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <Sparkles size={18} className="text-primary animate-pulse" />
          {t.navPortfolio}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {!isAdmin && navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary group-hover:w-3/4 transition-all duration-300 rounded-full shadow-[0_0_8px_hsla(var(--glow-primary),0.5)]" />
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="p-2 rounded-xl text-xs font-bold text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-1"
            title={lang === 'en' ? 'বাংলায় দেখুন' : 'Switch to English'}
          >
            <Languages size={16} />
            <span>{lang === 'en' ? 'বাং' : 'EN'}</span>
          </button>

          <Link
            to={isAdmin ? '/' : '/admin'}
            className="ml-2 px-5 py-2 rounded-xl text-sm font-semibold bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsla(var(--glow-primary),0.3)] transition-all duration-300"
          >
            {isAdmin ? t.navViewPortfolio : t.navAdmin}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg text-xs font-bold text-primary hover:bg-primary/10 transition-colors flex items-center gap-0.5"
          >
            <Languages size={16} />
            <span>{lang === 'en' ? 'বাং' : 'EN'}</span>
          </button>
          <button className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-background/95 via-primary/5 to-secondary/5 border-y-2 border-primary/50 p-6 flex flex-col gap-3 animate-fade-in shadow-[0_8px_40px_hsla(var(--glow-primary),0.2)]">
          {!isAdmin && navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-base font-semibold text-foreground hover:text-primary py-3.5 px-5 rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 border-2 border-transparent hover:border-primary/50 transition-all duration-300 text-left font-display shadow-[0_2px_8px_hsla(var(--glow-primary),0.1)] hover:shadow-[0_4px_16px_hsla(var(--glow-primary),0.25)] hover:scale-105"
            >
              {item.label}
            </button>
          ))}
          <div className="border-t-2 border-primary/30 my-2" />
          <Link to={isAdmin ? '/' : '/admin'} className="text-base font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary py-3.5 px-5 hover:shadow-[0_0_20px_hsla(var(--glow-primary),0.4)] rounded-xl transition-all duration-300 text-center font-display border-2 border-primary/70 hover:border-secondary hover:scale-105" onClick={() => setOpen(false)}>
            {isAdmin ? t.navViewPortfolio : t.navAdmin}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
