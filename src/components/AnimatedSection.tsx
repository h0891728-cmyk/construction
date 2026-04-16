import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  onClick?: (e: React.MouseEvent) => void;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  style: externalStyle,
  delay = 0,
  direction = 'up',
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.10 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const getAnimStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      opacity: visible ? 1 : 0,
    };

    if (!visible) {
      if (direction === 'up') base.transform = 'translateY(32px)';
      if (direction === 'left') base.transform = 'translateX(-40px)';
      if (direction === 'right') base.transform = 'translateX(40px)';
    } else {
      base.transform = 'translate(0,0)';
    }

    return base;
  };

  const combinedStyle: React.CSSProperties = {
    ...externalStyle,
    ...getAnimStyle(),
  };

  return (
    <div ref={ref} className={className} style={combinedStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default AnimatedSection;

// Animated number counter
export const AnimatedCounter: React.FC<{
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}> = ({ end, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};
