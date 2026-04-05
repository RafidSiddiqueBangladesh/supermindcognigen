import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "blur-in"
  | "slide-up"
  | "slide-rotate";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  stagger?: number; // for staggering children
}

const animationStyles: Record<AnimationType, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-10",
    to: "opacity-100 translate-y-0",
  },
  "fade-down": {
    from: "opacity-0 -translate-y-10",
    to: "opacity-100 translate-y-0",
  },
  "fade-left": {
    from: "opacity-0 translate-x-10",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 -translate-x-10",
    to: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    from: "opacity-0 scale-75",
    to: "opacity-100 scale-100",
  },
  "zoom-out": {
    from: "opacity-0 scale-110",
    to: "opacity-100 scale-100",
  },
  "flip-up": {
    from: "opacity-0 [transform:perspective(800px)_rotateX(30deg)]",
    to: "opacity-100 [transform:perspective(800px)_rotateX(0deg)]",
  },
  "blur-in": {
    from: "opacity-0 blur-sm",
    to: "opacity-100 blur-0",
  },
  "slide-up": {
    from: "opacity-0 translate-y-16",
    to: "opacity-100 translate-y-0",
  },
  "slide-rotate": {
    from: "opacity-0 translate-y-8 rotate-1",
    to: "opacity-100 translate-y-0 rotate-0",
  },
};

const AnimateOnScroll = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  once = true,
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? styles.to : styles.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
