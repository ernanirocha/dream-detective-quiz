import { useEffect } from "react";

type Props = {
  mobileCode?: string;
  desktopCode?: string;
  style?: React.CSSProperties;
};

export default function AdxAd({
  mobileCode = "cleoloiolatp_mob_topo",
  desktopCode = "cleoloiolatp_desk_topo",
  style = { display: "block", minHeight: 120, margin: "12px 0" },
}: Props) {
  useEffect(() => {
    // Carrega o script do ADX se ainda não foi carregado
    if (!window.adxLoaded) {
      const script = document.createElement('script');
      script.src = 'https://api.onebigmedia.com.br/api/wrapper/0620e5e7-1516-4c38-831b-9c3f0886fc7f';
      script.defer = true;
      script.onload = () => {
        window.adxLoaded = true;
        console.log('ADX: Script da OneBigMedia carregado');
      };
      document.head.appendChild(script);
    }

    // Detecta se é mobile ou desktop
    const isMobile = window.innerWidth <= 768;
    const adCode = isMobile ? mobileCode : desktopCode;
    
    // Log para debug
    console.log(`ADX: Anúncio ${isMobile ? 'mobile' : 'desktop'} configurado: ${adCode}`);
  }, [mobileCode, desktopCode]);

  // Renderiza ambos os blocos, mas exibe apenas um baseado em media query CSS
  return (
    <div style={style}>
      {/* Mobile ad */}
      <div 
        className="block md:hidden"
        data-adUnitCode={mobileCode}
      />
      
      {/* Desktop ad */}
      <div 
        className="hidden md:block"
        data-adUnitCode={desktopCode}
      />
    </div>
  );
}

// Adiciona tipagem para window
declare global {
  interface Window {
    adxLoaded?: boolean;
    adx?: {
      load: (adCode: string) => void;
    };
  }
}
