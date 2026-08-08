import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const PROBE_PX = 200;
// margem de segurança contra arredondamento de subpixel
const SAFETY = 0.995;

/**
 * Ajusta o tamanho da fonte para que o texto (em uma única linha) ocupe
 * exatamente a largura do container, sem cortar em nenhum viewport.
 */
export default function useFitText<T extends HTMLElement = HTMLElement>(
  deps: unknown = null
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<T | null>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const el = textRef.current;
    if (!container || !el) return;

    const available = container.clientWidth;
    if (available === 0) return;

    const prevFontSize = el.style.fontSize;
    const prevWidth = el.style.width;

    // `width: max-content` é essencial: sem isso o texto não transborda em telas
    // largas e scrollWidth devolveria a largura do container, não a do texto.
    el.style.fontSize = `${PROBE_PX}px`;
    el.style.width = 'max-content';
    const measured = el.scrollWidth;
    el.style.fontSize = prevFontSize;
    el.style.width = prevWidth;

    if (measured === 0) return;
    setFontSize((available / measured) * PROBE_PX * SAFETY);
  }, []);

  useLayoutEffect(() => {
    measure();

    const container = containerRef.current;
    const observer = new ResizeObserver(measure);
    if (container) observer.observe(container);

    // a fonte Kanit chega depois do primeiro paint: remede quando carregar
    document.fonts?.ready.then(measure).catch(() => {});

    return () => observer.disconnect();
  }, [measure, deps]);

  return { containerRef, textRef, fontSize };
}
