import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Sites',
    description:
      'Criamos sites modernos, rápidos e estratégicos, desenvolvidos para transmitir credibilidade, fortalecer sua marca e transformar visitantes em clientes.',
  },
  {
    number: '02',
    name: 'Marketing Digital',
    description:
      'Planejamos e executamos estratégias de marketing digital focadas em atrair mais clientes, aumentar sua autoridade e gerar crescimento consistente para o seu negócio.',
  },
  {
    number: '03',
    name: 'Chatbots',
    description:
      'Desenvolvemos chatbots inteligentes que automatizam atendimentos, qualificam leads e oferecem suporte 24 horas por dia, melhorando a experiência dos clientes.',
  },
  {
    number: '04',
    name: 'CRM',
    description:
      'Implementamos soluções de CRM para organizar processos comerciais, acompanhar clientes, automatizar tarefas e aumentar a produtividade da equipe.',
  },
  {
    number: '05',
    name: 'Sistemas Personalizados',
    description:
      'Criamos sistemas sob medida para automatizar processos, integrar informações e resolver necessidades específicas da sua empresa com eficiência e escalabilidade.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative z-0 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Serviços
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="font-black leading-none flex-shrink-0"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h3
                className="font-medium uppercase leading-tight"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
