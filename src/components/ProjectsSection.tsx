import { useData } from '@/lib/DataContext';
import { ExternalLink, Github, Rocket } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedBorderCard from './AnimatedBorderCard';
import { useLang } from '@/hooks/useLang';

const ProjectCard = ({ project, index }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

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
      <AnimateOnScroll animation="slide-up" delay={index * 150} duration={700}>
        <AnimatedBorderCard className="h-full">
          <div className="overflow-hidden group relative h-full flex flex-col">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <div className="relative h-[60%] overflow-hidden">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Hover action buttons */}
              <div className="absolute inset-0 flex justify-end items-end p-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                  title="View Live Demo"
                >
                  <ExternalLink size={18} className="text-primary-foreground" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/90 hover:bg-secondary flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                  title="View Source Code"
                >
                  <Github size={18} className="text-secondary-foreground" />
                </a>
              </div>
            </div>
            <div className="p-6 h-[40%] overflow-hidden flex flex-col">
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-1">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-2 overflow-hidden">
                {project.techStack.slice(0, 2).map((tech: string) => (
                  <span key={tech} className="px-2 py-0.5 rounded-lg bg-foreground/10 text-foreground text-xs font-medium transition-all duration-300 hover:bg-primary/20 hover:text-primary">{tech}</span>
                ))}
                {project.techStack.length > 2 && (
                  <span className="text-xs text-muted-foreground">+{project.techStack.length - 2}</span>
                )}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-border/30 mt-auto">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Links:</span>
                <a href={project.demoLink} className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-all duration-300 font-semibold hover:drop-shadow-[0_0_8px_hsla(var(--glow-primary),0.5)]">
                  <ExternalLink size={12} /> {t.projDemo}
                </a>
                <span className="text-border">·</span>
                <a href={project.githubLink} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_hsla(var(--glow-primary),0.3)]">
                  <Github size={12} /> {t.projGithub}
                </a>
              </div>
            </div>
          </div>
        </AnimatedBorderCard>
      </AnimateOnScroll>
    </div>
  );
};

const ProjectsSection = () => {
  const { projects } = useData();
  const { t } = useLang();

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto relative">
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="text-center mb-14 relative z-10">
        <AnimateOnScroll animation="fade-down" duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-4 tracking-wider uppercase">
            <Rocket size={12} /> {t.projBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3">{t.projHeading}</h2>
          <p className="section-subtitle">{t.projSubtitle}</p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
