import Hero from '@/components/Hero';
import AgencyProfileSection from '@/components/AgencyProfileSection';
import SkillsSection from '@/components/SkillsSection';
import CompetitionsSection from '@/components/CompetitionsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import StatsSection from '@/components/StatsSection';
import FloatingParticles from '@/components/FloatingParticles';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeStudio from '@/components/ThemeStudio';
import CustomCursor from '@/components/CustomCursor';
import { Heart } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

const Index = () => {
  const { t } = useLang();
  return (
    <main className="relative overflow-hidden">
      {/* Custom animated cursor */}
      <CustomCursor />

      {/* Floating particles background */}
      <FloatingParticles />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
      <ThemeStudio />

      <div className="relative z-10">
        <Hero />
        <AgencyProfileSection />
        <StatsSection />
        <SkillsSection />
        <CompetitionsSection />
        <ProjectsSection />
        <Timeline />
        <ContactForm />

        {/* Footer */}
        <footer className="py-12 text-center relative">
          <AnimateOnScroll animation="fade-up" duration={600}>
            <div className="neon-line max-w-xs mx-auto mb-8" />
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              {t.footerBuilt} <Heart size={13} className="text-primary" /> · © {new Date().getFullYear()}
            </p>
          </AnimateOnScroll>
        </footer>
      </div>
    </main>
  );
};

export default Index;
