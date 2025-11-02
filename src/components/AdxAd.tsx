import { useEffect, useRef, useState } from "react";

type Props = {
  mobileCode?: string;
  desktopCode?: string;
  style?: React.CSSProperties;
};

export default function AdxAd({
  mobileCode = "quizmob",
  desktopCode = "cleoloiolatp_desk_topo",
  style = { display: "block", minHeight: 0, margin: "4px 0" },
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null); // ⬅️ novo
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    if (!window.adxLoaded) {
      const s = document.createElement("script");
      s.src = "https://api.onebigmedia.com.br/api/wrapper/0620e5e7-1516-4c38-831b-9c3f0886fc7f";
      s.defer = true;
      s.onload = () => {
        window.adxLoaded = true;
      };
      document.head.appendChild(s);
    }

    const isDesktop = window.innerWidth >= 980;
    const chosen = isDesktop && desktopCode ? desktopCode : mobileCode;
    const slot = slotRef.current;
    if (slot) slot.setAttribute("data-adunitcode", chosen); // expõe um único unit
  }, [isVisible, mobileCode, desktopCode]);

  // ⬇️ centraliza QUALQUER nó que o wrapper injetar (filho/netos)
  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const mo = new MutationObserver(() => {
      const first = slot.firstElementChild as HTMLElement | null;
      if (!first) return;
      first.style.display = "block";
      first.style.marginLeft = "auto";
      first.style.marginRight = "auto";
      first.querySelectorAll("iframe, div").forEach((n) => {
        const el = n as HTMLElement;
        el.style.display = "block";
        el.style.marginLeft = "auto";
        el.style.marginRight = "auto";
      });
    });
    mo.observe(slot, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={style} className="w-full">
      {isVisible && (
        <div
          ref={slotRef} // ⬅️ novo
          style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: 970 }}
          className="ad-slot"
          role="complementary"
          aria-label="Publicidade"
        />
      )}
    </div>
  );
}

declare global {
  interface Window {
    adxLoaded?: boolean;
    adx?: { load: (adCode: string) => void };
  }
}
