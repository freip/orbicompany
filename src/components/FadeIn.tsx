import { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

const FadeIn = forwardRef<HTMLElement, FadeInProps>(function FadeIn(
  {
    children,
    as = 'div',
    className,
    style,
    delay = 0,
    duration = 0.7,
    x = 0,
    y = 30,
  },
  ref
) {
  // memoizado: recriar o componente a cada render remontaria o nó e
  // reiniciaria a animação a cada atualização do pai
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
});

export default FadeIn;
