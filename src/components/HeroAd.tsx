import AdSlot from "./AdSlot";
import { UNITS, DESKTOP_BREAKPOINT } from "../ads/units";

export default function HeroAd() {
  return (
    <AdSlot
      unitMobile={UNITS.heroMobile}
      unitDesktop={UNITS.heroDesktop}
      reveal="immediate"        // monta ao carregar a tela
      className="ad-hero"       // 90px (ajuste se usar 300x250)
      breakpoint={DESKTOP_BREAKPOINT}
    />
  );
}
