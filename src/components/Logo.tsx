/**
 * Marca Orbi — desenhada em SVG monocromático (herda a cor via `currentColor`),
 * para ficar nítida em qualquer tamanho e combinar com o fundo escuro do site.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Orbi Company"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={13}
      strokeLinecap="round"
    >
      {/* q — anel superior esquerdo + haste que desce e vira o corpo do b */}
      <circle cx="26" cy="26" r="17" />
      <path d="M43 26 V74" />
      {/* b — bojo inferior ligado à haste */}
      <circle cx="60" cy="74" r="17" />
      {/* r — haste com ombro no topo direito */}
      <path d="M74 44 V26 Q74 13 88 13" />
      {/* i — pingo + haste */}
      <path d="M88 50 v0" />
      <path d="M88 68 V90" />
    </svg>
  );
}
