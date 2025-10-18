import AdSlot from "./AdSlot";

export default function HeaderAd() {
  return (
    <AdSlot
      atf
      units={{
        mobile: "cleoloiolatp_mob_topo",
        desktop: "cleoloiolatp_desk_topo",
      }}
    />
  );
}
