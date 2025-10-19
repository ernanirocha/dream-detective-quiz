import { useEffect, useRef, useState } from "react";

type Props = {
  mobileCode?: string;
  desktopCode?: string;
  style?: React.CSSProperties;
};

export default function AdxAd({
  mobileCode = "cleoloiolatp_mob_topo",
  desktopCode = "cleoloiolatp_desk_topo",
  style = { display: "block", minHeight: 250, margin: "12px 0" },
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // ideal: carregar o wrapper no <head>; mantendo seu fluxo atual:
    if (!window.adxLoaded) {
      const s = document.createElement("script");
      s.src = "https://api.onebigmedia.com.br/api/wrapper/0620e5e7-1516-4c38-831b-9c3f0886fc7f";
      s.defer = true;
      s.onload = () => {
        window.adxLoaded = true;
      };
      document.head.appendChild(s);
    }

    // apenas log para debug
    const isDesktop = window.innerWidth >= 980;
    const chosen = isDesktop && desktopCode ? desktopCode : mobileCode;
    console.log(`ADX: exibindo ${isDesktop ? "desktop" : "mobile"} → ${chosen}`);
  }, [isVisible, mobileCode, desktopCode]);

  // UM placeholder; escolhe o unit no momento de exibir
  return (
    <div ref={containerRef} style={style} className="flex justify-center items-center w-full">
      {isVisible && (
        <div
          // ⬇️ atributo correto e único
          data-adunitcode={window.innerWidth >= 980 && desktopCode ? desktopCode : mobileCode}
          // centralização
          style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: 970 }}
          className="flex justify-center items-center"
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
