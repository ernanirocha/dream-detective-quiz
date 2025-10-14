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
    // Detecta se é mobile ou desktop
    const isMobile = window.innerWidth <= 768;
    const adCode = isMobile ? mobileCode : desktopCode;
    
    // Log para debug
    console.log(`ADX: Carregando anúncio ${isMobile ? 'mobile' : 'desktop'}: ${adCode}`);
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
