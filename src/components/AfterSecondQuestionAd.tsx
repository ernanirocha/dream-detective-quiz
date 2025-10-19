import AdSlot from "./AdSlot";
import { UNITS, DESKTOP_BREAKPOINT } from "../ads/units";

export default function AfterSecondQuestionAd({ show }: { show: boolean }) {
  return (
    <AdSlot
      unitMobile={UNITS.btfMobile}
      unitDesktop={UNITS.btfDesktop}
      reveal="by-flag"
      flag={show}
      className="lazy-ad"
      breakpoint={DESKTOP_BREAKPOINT}
    />
  );
}
