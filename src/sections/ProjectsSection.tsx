import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { LiveProjectButton } from '../components/Buttons';

const img = (name: string) => `https://motionsites.ai/assets/${name}.gif`;

const PROJECTS = [
  {
    number: '01',
    category: 'Site & Plataforma',
    name: 'Vertex Corporate',
    col1: [
      img('hero-xportfolio-preview-D4A8maiC'),
      img('hero-designpro-preview-D8c5_een'),
    ],
    col2: img('hero-nexora-preview-cx5HmUgo'),
  },
  {
    number: '02',
    category: 'Automação & IA',
    name: 'Atlas Chatbot',
    col1: [
      img('hero-stellar-ai-v2-preview-DjvxjG3C'),
      img('hero-codenest-preview-Cgppc2qV'),
    ],
    col2: img('hero-transform-data-preview-Cx5OU29N'),
  },
  {
    number: '03',
    category: 'CRM & Sistemas',
    name: 'Nexus Business',
    col1: [
      img('hero-wealth-preview-B70idl_u'),
      img('hero-vex-ventures-preview-BczMFIiw'),
    ],
    col2: img('hero-luminex-preview-CxOP7ce6'),
  },
];

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px`, backgroundColor: '#0C0C0C' }}
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5" style={{ width: '40%' }}>
            <img
              src={project.col1[0]}
              alt={`${project.name} — imagem 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} — imagem 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          <div style={{ width: '60%' }}>
            <img
              src={project.col2}
              alt={`${project.name} — imagem 3`}
              loading="lazy"
              className={`w-full h-full object-cover ${RADIUS}`}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projetos"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projetos
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
