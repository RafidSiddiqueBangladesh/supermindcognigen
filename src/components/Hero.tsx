import heroBg from '@/assets/hero-bg.jpg';
import { ArrowDown, Sparkles } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';
import { useLang } from '@/hooks/useLang';

const Hero = () => {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - commented out
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>
      */}

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-primary/8 blur-[100px] floating" />
      <div className="absolute bottom-1/3 right-[15%] w-96 h-96 rounded-full bg-secondary/8 blur-[120px] floating-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] floating-slow" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsla(190,100%,50%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(190,100%,50%,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <AnimateOnScroll animation="zoom-in" duration={800}>
          <AnimatedBorderCard>
            <div className="p-10 sm:p-14 relative overflow-hidden">
            {/* Inner decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

            <AnimateOnScroll animation="fade-down" delay={300} duration={600}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-8 tracking-wider uppercase glow-border">
                <Sparkles size={12} className="animate-pulse" />
                {t.heroBadge}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="blur-in" delay={500} duration={800}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-5 leading-[1.1]">
                <span className="gradient-text glow-text">{t.heroName1}</span>
                <br />
                <span className="text-foreground">{t.heroName2}</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={700} duration={600}>
              <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={900} duration={600}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-7 py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsla(var(--glow-primary),0.4)] transition-all duration-300 glow-border"
                >
                  {t.heroViewProjects}
                </button>
                <button
                  onClick={() => document.getElementById('competitions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-7 py-3 rounded-xl font-semibold text-sm glass glass-hover hover-glow-secondary text-secondary border-secondary/30"
                >
                  {t.heroCompetitions}
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-7 py-3 rounded-xl font-semibold text-sm glass glass-hover hover-glow-primary text-primary border-primary/30"
                >
                  {t.heroContact}
                </button>
              </div>
            </AnimateOnScroll>
          </div>
          </AnimatedBorderCard>
        </AnimateOnScroll>

        {/* Scroll indicator */}
        <AnimateOnScroll animation="fade-up" delay={1200} duration={600}>
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-16 inline-flex flex-col items-center gap-3 text-muted-foreground/60 hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm tracking-[0.25em] uppercase font-medium group-hover:tracking-[0.35em] transition-all duration-300">{t.heroScroll}</span>
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsla(var(--glow-primary),0.3)] group-hover:scale-110 transition-all duration-300">
              <ArrowDown size={22} className="animate-bounce text-primary" />
            </div>
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
