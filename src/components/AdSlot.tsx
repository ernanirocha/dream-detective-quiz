import { useEffect, useRef } from "react";

type Props = {
  unitMobile: string;
  unitDesktop: string;
  reveal: "immediate" | "on-visible" | "by-flag";
  flag?: boolean;        // usado quando reveal === "by-flag"
  className?: string;    // "ad-hero" (ATF) ou "lazy-ad" (BTF)
  breakpoint?: number;   // padrão 980
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

    // reserva mínima (reforça CSS global)
    if (!el.style.minHeight) {
      el.style.minHeight = className.includes("ad-hero") ? "90px" : "250px";
    }

    const pick = () => {
      if (chosen.current) return chosen.current;
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= breakpoint;
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

    if (reveal === "immediate") { expose(); return; }
    if (reveal === "by-flag")   { if (flag) expose(); return; }

    // on-visible (IntersectionObserver)
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              expose();
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px", threshold: 0.01 }
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      expose();
    }
  }, [flag, unitMobile, unitDesktop, reveal, className, breakpoint]);

  return (
    <div
      ref={ref}
      className={`ad-slot ${className}`}
      role="complementary"
      aria-label="Publicidade"
    />
  );
}
