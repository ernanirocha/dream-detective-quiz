import { useEffect } from "react";

declare global { 
  interface Window { 
    adsbygoogle: any[] 
  } 
}

type Props = {
  slot: string;                         // ex.: "8117047174"
  client?: string;                      // ex.: "ca-pub-1170863474773514"
  style?: React.CSSProperties;
  format?: string;                      // default "auto"
  responsive?: "true" | "false";        // default "true"
  adtest?: "on" | "off";                // use "on" para testes
};

export default function AdSenseAd({
  slot,
  client = "ca-pub-1170863474773514",
  style = { display: "block", minHeight: 120, margin: "12px 0" },
  format = "auto",
  responsive = "true",
  adtest = "off"
}: Props) {
  useEffect(() => {
    const ID = "adsbygoogle-js";
    if (!document.getElementById(ID)) {
      const s = document.createElement("script");
      s.id = ID;
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    }
    const t = setTimeout(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
    }, 150);
    return () => clearTimeout(t);
  }, [client, slot]);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-adtest={adtest}
    />
  );
}
