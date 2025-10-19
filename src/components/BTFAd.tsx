import AdSlot from "./AdSlot";
import { UNITS, DESKTOP_BREAKPOINT } from "../ads/units";

export default function BTFAd() {
  return (
    <AdSlot
      unitMobile={UNITS.btfMobile}
      unitDesktop={UNITS.btfDesktop}
      reveal="immediate"
      className="lazy-ad"
      breakpoint={DESKTOP_BREAKPOINT}
    />
  );
}
