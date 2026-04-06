import { Mail, Linkedin, Instagram, Facebook, Github } from 'lucide-react';
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
          <p className="text-sm text-foreground/85 max-w-2xl mx-auto mt-4 leading-relaxed">
            Need a solution? Feel free to message us on any of the channels below. We are happy to talk, and our fees are affordable, with the best value and pricing we can give.
          </p>
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
              <a href="mailto:supermindcognigen@gmail.com" className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium">supermindcognigen@gmail.com</a>
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
              <a href="https://www.linkedin.com/company/supermind-cognigen/about" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-secondary/80 transition-colors duration-300 font-medium">SuperMind Cognigen Company Page</a>
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
          <AnimateOnScroll animation="fade-right" delay={900} duration={600}>
            <AnimatedBorderCard>
            <div className="p-6 group">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-pink-500/20 group-hover:shadow-[0_0_20px_hsla(330,90%,60%,0.25)] group-hover:scale-110">
                <Instagram size={22} className="text-pink-400" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-pink-400">Instagram</h3>
              <a href="https://www.instagram.com/supermindcognigen/" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-400 hover:text-pink-300 transition-colors duration-300 font-medium">@supermindcognigen</a>
            </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-right" delay={1050} duration={600}>
            <AnimatedBorderCard>
            <div className="p-6 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_hsla(214,90%,60%,0.25)] group-hover:scale-110">
                <Facebook size={22} className="text-blue-400" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-blue-400">Facebook</h3>
              <a href="https://www.facebook.com/profile.php?id=61573231731967" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">SuperMind Cognigen Facebook</a>
            </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
