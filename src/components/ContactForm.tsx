import { Mail, Linkedin, Github } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';
import { useLang } from '@/hooks/useLang';

const ContactForm = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <AnimateOnScroll animation="fade-down" duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-4 tracking-wider uppercase">
            <Mail size={12} /> {t.contactBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3">{t.contactHeading}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{t.contactSubtitle}</p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <AnimateOnScroll animation="fade-right" delay={450} duration={600}>
            <AnimatedBorderCard>
            <div className="p-6 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsla(var(--glow-primary),0.25)] group-hover:scale-110">
                <Mail size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Email</h3>
              <a href="mailto:rafidsiddique.bd@gmail.com" className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium">Email SuperMind Cognigen</a>
            </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-right" delay={600} duration={600}>
            <AnimatedBorderCard>
            <div className="p-6 group">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-secondary/20 group-hover:shadow-[0_0_20px_hsla(var(--glow-secondary),0.25)] group-hover:scale-110">
                <Linkedin size={22} className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-secondary">LinkedIn</h3>
              <a href="https://linkedin.com/in/rafid-siddique" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-secondary/80 transition-colors duration-300 font-medium">LinkedIn Company Channel</a>
            </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-right" delay={750} duration={600}>
            <AnimatedBorderCard>
            <div className="p-6 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsla(var(--glow-primary),0.25)] group-hover:scale-110">
                <Github size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">GitHub</h3>
              <a href="https://github.com/RafidSiddiqueBangladesh" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium">GitHub Company Repositories</a>
            </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
