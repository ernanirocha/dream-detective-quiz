import { useEffect, useRef } from "react";

type Units = { mobile: string; desktop: string };
type Props = {
  units: Units;           // { mobile: '...', desktop: '...' }
  atf?: boolean;          // true = topo (monta já); false = BTF (lazy)
  minHeight?: number;     // altura reservada (anti-CLS)
  breakpoint?: number;    // largura para desktop (padrão 980)
};

export default function AdSlot({
  units,
  atf = false,
  minHeight,
  breakpoint = 980,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);
  const chosenRef = useRef<string | null>(null);

  const height = minHeight ?? (atf ? 90 : 250);

  useEffect(() => {
    const el = ref.current;
    if (!el || initialized.current) return;

    // reserva anti-CLS
    el.style.minHeight = `${height}px`;

    // escolhe unit UMA vez (evita duplicação em re-render/resize)
    const pickUnit = () => {
      if (chosenRef.current) return chosenRef.current;
      const isDesktop =
        typeof window !== "undefined" && window.innerWidth >= breakpoint;
      chosenRef.current = isDesktop ? units.desktop : units.mobile;
      return chosenRef.current;
    };

    const reveal = () => {
      if (initialized.current) return;
      const unit = pickUnit();
      if (!unit) return;
      el.setAttribute("data-adunitcode", unit);
      initialized.current = true;
    };

    if (atf) {
      // topo: expõe imediatamente
      reveal();
      return;
    }

    // BTF: expõe perto da viewport
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px", threshold: 0.01 }
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      // fallback
      reveal();
    }
  }, [units, atf, height, breakpoint]);

  return (
    <div
      ref={ref}
      className={`ad-slot ${atf ? "ad-atf" : "lazy-ad"}`}
      role="complementary"
      aria-label="Publicidade"
    />
  );
}
