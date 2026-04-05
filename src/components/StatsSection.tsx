import AnimatedCounter from "./AnimatedCounter";
import AnimateOnScroll from "./AnimateOnScroll";
import AnimatedBorderCard from "./AnimatedBorderCard";
import { useData } from "@/lib/DataContext";
import { Code, Trophy, Briefcase, Globe } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const StatsSection = () => {
  const { projects, competitions, skills } = useData();
  const { t } = useLang();

  const stats = [
    {
      icon: Code,
      value: projects.length,
      suffix: "+",
      label: t.statProjects,
      color: "text-primary",
      bg: "bg-primary/10",
      glow: "group-hover:shadow-[0_0_25px_hsla(var(--glow-primary),0.2)]",
    },
    {
      icon: Trophy,
      value: competitions.length,
      suffix: "+",
      label: t.statAwards,
      color: "text-secondary",
      bg: "bg-secondary/10",
      glow: "group-hover:shadow-[0_0_25px_hsla(var(--glow-secondary),0.2)]",
    },
    {
      icon: Briefcase,
      value: 8,
      suffix: "+",
      label: t.statExperience,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      glow: "group-hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]",
    },
    {
      icon: Globe,
      value: skills.length,
      suffix: "+",
      label: t.statSkills,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      glow: "group-hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]",
    },
  ];

  return (
    <section className="section-padding max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {stats.map((stat, i) => (
          <AnimateOnScroll
            key={stat.label}
            animation="zoom-in"
            delay={i * 120}
            duration={600}
          >
            <AnimatedBorderCard>
            <div className={`p-6 md:p-8 text-center group relative transition-all duration-500 ${stat.glow}`}>
              {/* Top glow line */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${stat.bg} mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_currentColor]`}>
                <stat.icon size={22} className={stat.color} />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2200} />
              <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </div>
            </AnimatedBorderCard>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
