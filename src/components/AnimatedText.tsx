import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = text.length;
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, w) => {
        // cada palavra é um bloco indivisível: sem isso o navegador quebra
        // a linha entre letras, porque cada caractere é um inline-block
        const node = (
          <span key={w} className="inline-block whitespace-nowrap">
            {word.split('').map((char, c) => {
              const i = charIndex + c;
              return (
                <Char
                  key={c}
                  char={char}
                  progress={scrollYProgress}
                  range={[i / total, (i + 1) / total]}
                />
              );
            })}
          </span>
        );

        charIndex += word.length + 1; // +1 pelo espaço consumido no split
        return w < words.length - 1 ? [node, <span key={`s${w}`}> </span>] : node;
      })}
    </p>
  );
}
