import AdSlot from "./AdSlot";
import { UNITS, DESKTOP_BREAKPOINT } from "../ads/units";

export default function AfterSecondQuestionAd({ show }: { show: boolean }) {
  if (!show) return null;
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
