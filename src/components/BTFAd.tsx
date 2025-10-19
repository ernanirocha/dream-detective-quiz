import AdxAd from "./AdxAd";
import { UNITS } from "../ads/units";

export default function BTFAd() {
  return (
    <AdxAd
      mobileCode={UNITS.btfMobile}
      desktopCode={UNITS.btfDesktop}
      style={{ display: "block", minHeight: 250, margin: "12px 0" }}
    />
  );
}

