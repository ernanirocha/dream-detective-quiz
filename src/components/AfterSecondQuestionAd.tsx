import AdSlot from "./AdSlot";
import { UNITS, DESKTOP_BREAKPOINT } from "../ads/units";

type Props = { show: boolean }; // true quando a 2ª pergunta foi concluída

export default function AfterSecondQuestionAd({ show }: Props) {
  return (
    <AdSlot
      unitMobile={UNITS.btfMobile}
      unitDesktop={UNITS.btfDesktop}
      reveal="by-flag"          // só expõe quando show === true
      flag={show}
      className="lazy-ad"       // 250px reservado (BTF)
      breakpoint={DESKTOP_BREAKPOINT}
    />
  );
}
