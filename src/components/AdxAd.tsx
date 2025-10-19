import { useEffect, useRef, useState } from "react";

type Props = {
  mobileCode?: string;
  desktopCode?: string; // mantido por compatibilidade (não usado)
  style?: React.CSSProperties;
};

export default function AdxAd({
  mobileCode = "cleoloiolatp_mob_topo",
  desktopCode, // ignorado
  style = { display: "block", minHeight: 250, margin: "12px 0" },
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // (opcional) mantém seu carregamento do wrapper, sem mudanças estruturais
    if (!window.adxLoaded) {
      const script = document.createElement("script");
      script.src = "https://api.onebigmedia.com.br/api/wrapper/0620e5e7-1516-4c38-831b-9c3f0886fc7f";
      script.defer = true;
      script.onload = () => {
        window.adxLoaded = true;
      };
      document.head.appendChild(script);
    }

    console.log(`ADX (mobile) carregado: ${mobileCode}`);
  }, [isVisible, mobileCode]);

  // rende UM ÚNICO placeholder (mobile) e garante centralização
  return (
    <div ref={containerRef} style={style} className="flex justify-center items-center w-full">
      {isVisible && (
        <div
          // atributo correto para o wrapper
          data-adunitcode={mobileCode}
          // centralização robusta
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
