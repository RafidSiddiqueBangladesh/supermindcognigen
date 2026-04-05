import { useData } from '@/lib/DataContext';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';
import { useLang } from '@/hooks/useLang';

const getIcon = (name: string): LucideIcon => {
  return (Icons as unknown as Record<string, LucideIcon>)[name] || Icons.Circle;
};

const typeColors: Record<string, string> = {
  internship: 'bg-white/10 text-foreground border-white/20 hover:bg-primary/15 hover:text-primary hover:border-primary/25',
  startup: 'bg-white/10 text-foreground border-white/20 hover:bg-secondary/15 hover:text-secondary hover:border-secondary/25',
  freelance: 'bg-white/10 text-foreground border-white/20 hover:bg-emerald-500/15 hover:text-emerald-400 hover:border-emerald-500/25',
  competition: 'bg-white/10 text-foreground border-white/20 hover:bg-amber-500/15 hover:text-amber-400 hover:border-amber-500/25',
  certification: 'bg-white/10 text-foreground border-white/20 hover:bg-sky-500/15 hover:text-sky-400 hover:border-sky-500/25',
};

const dotColors: Record<string, string> = {
  internship: 'border-primary bg-primary',
  startup: 'border-secondary bg-secondary',
  freelance: 'border-emerald-400 bg-emerald-400',
  competition: 'border-amber-400 bg-amber-400',
  certification: 'border-sky-400 bg-sky-400',
};

const Timeline = () => {
  const { timeline } = useData();
  const { t } = useLang();

  const typeLabels: Record<string, string> = {
    internship: t.tlInternship,
    startup: t.tlStartup,
    freelance: t.tlFreelance,
    competition: t.tlCompetition,
    certification: t.tlCertification,
  };

  return (
    <section id="timeline" className="section-padding max-w-3xl mx-auto relative">
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-secondary/3 blur-[100px] pointer-events-none" />

      <div className="text-center mb-14 relative z-10">
        <AnimateOnScroll animation="fade-down" duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-secondary mb-4 tracking-wider uppercase">
            <Icons.Clock size={12} /> {t.tlBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3">{t.tlHeading}</h2>
          <p className="section-subtitle">{t.tlSubtitle}</p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </AnimateOnScroll>
      </div>

      <div className="relative z-10">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px" style={{
          background: 'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, transparent 100%)',
          opacity: 0.4
        }} />

        <div className="space-y-6">
          {timeline.map((item, i) => {
            const Icon = getIcon(item.icon);
            const dot = dotColors[item.type] || 'border-primary bg-primary';
            return (
              <AnimateOnScroll
                key={item.id}
                animation="fade-left"
                delay={i * 150}
                duration={700}
                className="relative pl-16"
              >
                {/* Dot with glow */}
                <div className={`absolute left-[18px] top-6 w-[9px] h-[9px] rounded-full ${dot} shadow-[0_0_8px_currentColor]`} />

                <AnimatedBorderCard>
                <div className="p-6 group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-secondary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* Top glow line */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center gap-2 mb-3 flex-wrap relative z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_12px_currentColor] ${typeColors[item.type]}`}>
                      {typeLabels[item.type] || item.type}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{item.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1 flex items-center gap-2 relative z-10">
                    <Icon size={16} className="text-primary shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary/70 mb-2 font-medium relative z-10">{item.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.description}</p>
                </div>
                </AnimatedBorderCard>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
