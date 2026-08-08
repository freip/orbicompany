const WHATSAPP_NUMBER = '5515991876782';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const CONTACT_LINK = whatsappLink(
  'Olá! Vim pelo site da Orbi Company e gostaria de falar com vocês.'
);

const PROJECT_LINK = whatsappLink(
  'Olá! Vim pelo site da Orbi Company e quero iniciar um projeto.'
);

export function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={CONTACT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      Fale Conosco
    </a>
  );
}

export function LiveProjectButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={PROJECT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Iniciar Projeto
    </a>
  );
}
