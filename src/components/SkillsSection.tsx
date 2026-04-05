import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';
import { useLang } from '@/hooks/useLang';

const getIcon = (name: string): LucideIcon => {
  return (Icons as unknown as Record<string, LucideIcon>)[name] || Icons.Code;
};

const SkillsSection = () => {
  const { t } = useLang();

  const developmentServices = [
    {
      id: 'service-1',
      name: 'Web Development',
      icon: 'Globe',
      description: 'High-performance websites and web apps built with modern stacks.',
      level: 95,
    },
    {
      id: 'service-2',
      name: 'App Development',
      icon: 'Smartphone',
      description: 'Cross-platform mobile applications focused on UX and reliability.',
      level: 92,
    },
    {
      id: 'service-3',
      name: 'AI Integration',
      icon: 'Brain',
      description: 'AI-powered product features, automation flows, and data intelligence.',
      level: 90,
    },
    {
      id: 'service-4',
      name: 'Cloud and Backend Systems',
      icon: 'Server',
      description: 'Secure APIs, cloud deployment, and scalable backend architectures.',
      level: 91,
    },
    {
      id: 'service-5',
      name: 'E-Commerce Solutions',
      icon: 'ShoppingCart',
      description: 'Conversion-focused stores, payment integration, and growth features.',
      level: 88,
    },
    {
      id: 'service-6',
      name: 'UI and Product Design',
      icon: 'Palette',
      description: 'Modern interfaces with strong branding and user-centered interactions.',
      level: 89,
    },
  ];

  const creativeServices = [
    {
      id: 'service-7',
      name: 'Digital Marketing',
      icon: 'TrendingUp',
      description: 'Strategy, execution, and campaign optimization for measurable growth.',
      level: 87,
    },
    {
      id: 'service-8',
      name: 'SEO Optimization',
      icon: 'Search',
      description: 'Technical and on-page SEO to increase visibility and organic reach.',
      level: 86,
    },
    {
      id: 'service-9',
      name: 'Video Editing',
      icon: 'Clapperboard',
      description: 'Brand videos, reels, and ad creatives with platform-ready outputs.',
      level: 84,
    },
    {
      id: 'service-10',
      name: 'Graphics Design',
      icon: 'PenTool',
      description: 'Professional visual assets for social media, campaigns, and products.',
      level: 85,
    },
    {
      id: 'service-11',
      name: 'Brand Identity and Content',
      icon: 'BadgeCheck',
      description: 'Brand systems, visual consistency, and communication assets.',
      level: 83,
    },
    {
      id: 'service-12',
      name: 'Maintenance and Support',
      icon: 'Wrench',
      description: 'Continuous updates, monitoring, and technical support for stability.',
      level: 90,
    },
  ];

  const SkillCard = ({
    skill,
    index,
  }: {
    skill: { id: string; name: string; icon: string; description: string; level: number };
    index: number;
  }) => {
    const Icon = getIcon(skill.icon);
    return (
      <AnimateOnScroll animation="fade-up" delay={index * 100} duration={600}>
        <AnimatedBorderCard className="h-full">
          <div className="p-6 group relative overflow-hidden h-full flex flex-col">
          {/* Subtle corner glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-start gap-4 flex-1 relative z-10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-[0_0_20px_hsla(var(--glow-primary),0.25)] group-hover:scale-110">
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mb-1 leading-relaxed line-clamp-2">{skill.description}</p>
              </div>
            </div>
            {/* Progress bar at bottom */}
            <div className="mt-auto pt-4 border-t border-border/20 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Proficiency</span>
                <span className="text-xs font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted/60 overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'shimmer 3s infinite' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBorderCard>
      </AnimateOnScroll>
    );
  };

  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto relative">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="text-center mb-14 relative z-10">
        <AnimateOnScroll animation="fade-down" duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-4 tracking-wider uppercase">
            <Icons.Layers size={12} /> {t.skillsBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3">{t.skillsHeading}</h2>
          <p className="section-subtitle">{t.skillsSubtitle}</p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </AnimateOnScroll>
      </div>

      <div className="mb-12 relative z-10">
        <AnimateOnScroll animation="fade-right" duration={500}>
          <h3 className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <Icons.Layers size={18} className="text-primary" /> {t.skillsTech}
          </h3>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {developmentServices.map((skill, i) => <SkillCard key={skill.id} skill={skill} index={i} />)}
        </div>
      </div>

      <div className="relative z-10">
        <AnimateOnScroll animation="fade-right" duration={500}>
          <h3 className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <Icons.Sparkles size={18} className="text-secondary" /> {t.skillsOther}
          </h3>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creativeServices.map((skill, i) => <SkillCard key={skill.id} skill={skill} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
