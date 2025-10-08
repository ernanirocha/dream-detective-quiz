{
  /* Anúncio AdSense no Results */
}
<AdSenseAd
  client="ca-pub-1170863474773514"
  slot="8117047174"
  // adtest="on"
/>;

interface ProgressDotsProps {
  total: number;
  current: number;
}

const ProgressDots = ({ total, current }: ProgressDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`
            w-2 h-2 rounded-full transition-all duration-300
            ${index < current ? "bg-primary w-6 animate-glow-pulse" : "bg-muted-foreground/30"}
          `}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
