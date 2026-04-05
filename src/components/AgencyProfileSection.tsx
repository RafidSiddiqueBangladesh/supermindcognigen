import { Building2, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';

const highlights = [
  {
    icon: Zap,
    title: 'Fast Systems',
    text: 'Performance-focused architecture and rapid delivery pipelines for real business outcomes.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    text: 'Security controls and best practices are integrated from architecture to deployment.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Ready Intelligence',
    text: 'Scalable systems designed to adapt, learn, and support AI-driven decision workflows.',
  },
];

const AgencyProfileSection = () => {
  return (
    <section id="profile" className="section-padding max-w-7xl mx-auto relative">
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-secondary/8 blur-[100px] pointer-events-none" />

      <div className="text-center mb-12 relative z-10">
        <AnimateOnScroll animation="fade-down" duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-4 tracking-wider uppercase">
            <Building2 size={12} /> Company Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3">SuperMind Cognigen</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building fast, secure, and intelligent systems for the AI-driven future.
          </p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="fade-up" delay={120} duration={650}>
        <AnimatedBorderCard className="mb-8">
          <div className="p-6 sm:p-8 group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Building2 size={22} className="text-primary" />
            </div>

            <h3 className="font-display font-semibold text-foreground text-xl mb-3">Who We Are</h3>

            <p className="text-base text-foreground leading-relaxed mb-4">
              SuperMind Cognigen is a next-generation technology company building fast, secure, and intelligent systems that help businesses scale, adapt, and lead in the AI-driven future.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30">Fast Delivery</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30">Secure Architecture</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-foreground border border-border/70">AI-Driven Systems</span>
            </div>
          </div>
        </AnimatedBorderCard>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {highlights.map((item, i) => (
          <AnimateOnScroll key={item.title} animation="slide-up" delay={i * 120} duration={650}>
            <AnimatedBorderCard>
              <div className="p-6 h-full group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default AgencyProfileSection;
