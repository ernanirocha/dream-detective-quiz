import AdSlot from "./AdSlot";
import { UNITS, DESKTOP_BREAKPOINT } from "../ads/units";

export default function HeroAd() {
  return (
    <AdSlot
      unitMobile={UNITS.heroMobile}
      unitDesktop={UNITS.heroDesktop}
      reveal="immediate"
      className="ad-hero"
      breakpoint={DESKTOP_BREAKPOINT}
    />
  );
}
