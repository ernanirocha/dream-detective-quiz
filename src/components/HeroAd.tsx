import AdxAd from "./AdxAd";
import { UNITS } from "../ads/units";

export default function HeroAd() {
  return (
    <AdxAd
      mobileCode={UNITS.heroMobile}
      desktopCode={UNITS.heroDesktop}
      style={{ display: "block", minHeight: 90, margin: "12px 0" }}
    />
  );
}

