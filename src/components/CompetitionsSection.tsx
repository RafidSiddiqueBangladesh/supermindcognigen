import { useData } from '@/lib/DataContext';
import { useState, useRef, useEffect } from 'react';
import { Trophy, Award, Users, ExternalLink, Lightbulb, Wrench, Medal } from 'lucide-react';
import gsap from 'gsap';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';
import { useLang } from '@/hooks/useLang';

const resultConfig: Record<string, { color: string; icon: typeof Trophy }> = {
  Winner: { color: 'text-primary bg-primary/50 border-primary/70', icon: Trophy },
  Finalist: { color: 'text-secondary bg-secondary/15 border-secondary/30', icon: Award },
  Participant: { color: 'text-muted-foreground bg-muted border-border', icon: Users },
};

const categoryLabel: Record<string, string> = {
  hackathon: 'Hackathon Case',
  datathlon: 'Datathon Case',
  startup: 'Startup Case',
  certification: 'Certification Case',
  competition: 'Competition Case',
};

const getRecognitionText = (result: string) => {
  if (result === 'Winner') return 'Won top recognition for strong execution and impact.';
  if (result === 'Finalist') return 'Reached finalist stage with a high-performing solution.';
  return 'Earned recognition among strong participants.';
};

const getSolutionText = (comp: any) => {
  const stack = comp.technologies?.slice(0, 3).join(', ');
  return `We designed and delivered a focused solution using ${stack || 'modern tools'}, balancing speed, quality, and presentation under deadline pressure.`;
};

const CompetitionCard = ({ comp, index }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const result = resultConfig[comp.result];
  const ResultIcon = result.icon;

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    // Initial setup
    gsap.set(card, { y: 20, opacity: 0 });
    
    // Create observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Entrance animation
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              delay: index * 0.12,
            });

            // Floating animation on hover
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                y: -10,
                duration: 0.5,
                ease: 'power2.out',
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
              });
            });

            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="h-full">
      <AnimatedBorderCard className="h-full">
        <div className="overflow-hidden group relative h-full flex flex-col">
          {/* Top glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          <div className="relative h-56 overflow-hidden">
            <img
              src={comp.image}
              alt={comp.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Result badge */}
            <span className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md transition-all duration-300 ${result.color}`}>
              <ResultIcon size={12} className="inline mr-1.5 -mt-0.5" />
              {comp.result}
            </span>

            {/* Hover action button */}
            {comp.link && (
              <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={comp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                  title="View Details"
                >
                  <ExternalLink size={18} className="text-primary-foreground" />
                </a>
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-foreground font-semibold line-clamp-1">{categoryLabel[comp.category] || 'Case Study'}</span>
              <span className="text-xs text-muted-foreground">· {comp.date}</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground leading-tight">{comp.name}</h3>

            <div className="space-y-2">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-primary font-semibold mb-1 flex items-center gap-1.5">
                  <Lightbulb size={12} /> Intro
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{comp.description}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-primary font-semibold mb-1 flex items-center gap-1.5">
                  <Wrench size={12} /> What We Did and How We Built It
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{getSolutionText(comp)}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-secondary font-semibold mb-1 flex items-center gap-1.5">
                  <Medal size={12} /> Recognition
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{getRecognitionText(comp.result)}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 pt-1 border-t border-border/30">
              {comp.technologies.slice(0, 3).map((tech: string) => (
                <span key={tech} className="px-2 py-0.5 rounded-md bg-foreground/10 text-foreground text-xs font-medium transition-all duration-300 hover:bg-primary/20 hover:text-primary">{tech}</span>
              ))}
              {comp.technologies.length > 3 && (
                <span className="text-xs text-muted-foreground">+{comp.technologies.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </AnimatedBorderCard>
    </div>
  );
};

const CompetitionsSection = () => {
  const { competitions } = useData();
  const { t } = useLang();
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'hackathon', 'datathlon', 'startup', 'certification', 'competition'];
  const filtered = filter === 'all' ? competitions : competitions.filter(c => c.category === filter);

  return (
    <section id="competitions" className="section-padding max-w-7xl mx-auto relative">
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-secondary/3 blur-[100px] pointer-events-none" />

      <div className="text-center mb-14 relative z-10">
        <AnimateOnScroll animation="fade-down" duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-secondary mb-4 tracking-wider uppercase">
            <Trophy size={12} /> {t.compBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3">{t.compHeading}</h2>
          <p className="section-subtitle">{t.compSubtitle}</p>
          <div className="neon-line max-w-xs mx-auto mt-4 mb-8" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200} duration={500}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 capitalize ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground glow-border shadow-[0_0_20px_hsla(var(--glow-primary),0.25)]'
                    : 'glass glass-hover text-foreground hover:text-primary'
                }`}
              >
                {cat === 'all' ? t.filterAll : cat === 'hackathon' ? t.filterHackathon : cat === 'datathlon' ? t.filterDatathlon : cat === 'startup' ? t.filterStartup : cat === 'certification' ? t.filterCertification : t.filterCompetition}
              </button>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filtered.map((comp, i) => (
          <CompetitionCard key={comp.id} comp={comp} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CompetitionsSection;
