import { useEffect, useRef } from "react";

type Props = {
  unitMobile: string;
  unitDesktop: string;
  reveal: "immediate" | "by-flag";
  flag?: boolean;
  className?: string;
  breakpoint?: number;
};

export default function AdSlot({
  unitMobile,
  unitDesktop,
  reveal,
  flag,
  className = "",
  breakpoint = 980,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);
  const chosen = useRef<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || initialized.current) return;

    // Altura mínima (reforça CSS e evita CLS)
    if (!el.style.minHeight) {
      el.style.minHeight = className.includes("ad-hero") ? "90px" : "250px";
    }

    // Escolhe APENAS uma vez (evita duplicidade)
    const pick = () => {
      if (chosen.current) return chosen.current;
      const isDesktop =
        typeof window !== "undefined" && window.innerWidth >= (breakpoint ?? 980);
      chosen.current = isDesktop ? unitDesktop : unitMobile;
      return chosen.current;
    };

    const expose = () => {
      if (initialized.current) return;
      const unit = pick();
      if (!unit) return;
      el.setAttribute("data-adunitcode", unit);
      initialized.current = true;
    };

    // HERO: monta na hora
    if (reveal === "immediate") {
      expose();
    }

    // BTF: monta quando flag ficar true
    if (reveal === "by-flag" && flag) {
      expose();
    }

    // CENTRALIZAÇÃO À PROVA DE FALHAS (MutationObserver)
    const mo = new MutationObserver(() => {
      // Centraliza TODOS os filhos e netos (não só o primeiro)
      const applyCenter = (node: Element) => {
        if (node instanceof HTMLElement) {
          node.style.display = "block";
          node.style.marginLeft = "auto";
          node.style.marginRight = "auto";
        }
        // Aplica recursivamente aos filhos
        Array.from(node.children).forEach(applyCenter);
      };
      
      if (el.firstElementChild) {
        applyCenter(el.firstElementChild);
      }
    });
    mo.observe(el, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [flag, unitMobile, unitDesktop, reveal, className, breakpoint]);

  return (
    <div className="ad-center">
      <div
        ref={ref}
        className={`ad-slot ${className}`}
        role="complementary"
        aria-label="Publicidade"
      />
    </div>
  );
}
