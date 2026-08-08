import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ContactButton } from '../components/Buttons';
import Logo from '../components/Logo';
import useFitText from '../hooks/useFitText';

const HEADING = 'oi, sou o orbi';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const PORTRAIT = '/personagem.webp';

export default function HeroSection() {
  const { containerRef, textRef, fontSize } = useFitText<HTMLHeadingElement>();

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center gap-4 sm:gap-8 md:gap-12 px-6 md:px-10 pt-6 md:pt-8"
      >
        <a
          href="#"
          aria-label="Orbi Company — início"
          className="flex-shrink-0 text-[#D7E2EA] opacity-70 transition-opacity duration-200 hover:opacity-100"
        >
          <Logo className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </a>

        <div className="flex flex-1 justify-between">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="relative z-20 overflow-hidden px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5">
        {/* container sem padding: sua largura é exatamente o espaço disponível
            para o título, usado pelo useFitText para calcular a fonte */}
        <div ref={containerRef} className="w-full">
          <FadeIn
            as="h1"
            ref={textRef}
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
            style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
          >
            {HEADING}
          </FadeIn>
        </div>
      </div>

      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            transformamos ideias em soluções digitais que impulsionam empresas
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Wrapper de posicionamento sem transform: o FadeIn aplica transform inline
          (Framer Motion) e sobrescreveria as classes de centralização do Tailwind. */}
      <div className="absolute inset-x-0 z-10 flex justify-center pointer-events-none top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn
          delay={0.6}
          y={30}
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT}
              alt="Mascote da Orbi Company"
              width={1040}
              height={1255}
              decoding="async"
              className="w-full h-auto select-none"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
