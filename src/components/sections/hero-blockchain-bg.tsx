type ChainProps = {
  count: number;
  startX?: number;
  y?: number;
  spacing?: number;
  stroke?: string;
  className?: string;
  floatDelay?: string;
};

function IsoBlock({
  cx,
  cy,
  delay,
  stroke = "#c7f04a",
}: {
  cx: number;
  cy: number;
  delay: string;
  stroke?: string;
}) {
  const bottom = `${cx - 30},${cy} ${cx},${cy - 15} ${cx + 30},${cy} ${cx},${cy + 15}`;
  const top = `${cx},${cy - 15} ${cx + 30},${cy} ${cx + 30},${cy - 20} ${cx},${cy - 35}`;
  const left = `${cx - 30},${cy} ${cx},${cy - 15} ${cx},${cy - 35} ${cx - 30},${cy - 20}`;

  return (
    <g className="hero-block" style={{ animationDelay: delay }}>
      <polygon points={bottom} fill="#0f1219" stroke={stroke} strokeWidth="1" strokeOpacity="0.45" />
      <polygon points={top} fill="#161b24" stroke={stroke} strokeWidth="1" strokeOpacity="0.38" />
      <polygon points={left} fill="#0f1219" stroke={stroke} strokeWidth="1" strokeOpacity="0.32" />
    </g>
  );
}

function BlockChain({
  count,
  startX = 50,
  y = 70,
  spacing = 90,
  stroke = "#c7f04a",
  className = "",
  floatDelay = "0s",
}: ChainProps) {
  const width = startX + (count - 1) * spacing + 50;
  const centers = Array.from({ length: count }, (_, i) => startX + i * spacing);
  const linkY = y - 10;

  return (
    <svg
      className={`hero-chain-art ${className}`}
      viewBox={`0 0 ${width} 120`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-chain-group" style={{ animationDelay: floatDelay }}>
        {centers.map((cx, i) => (
          <g key={cx}>
            {i > 0 && (
              <line
                x1={centers[i - 1] + 30}
                y1={linkY}
                x2={cx - 30}
                y2={linkY}
                className="hero-chain-line"
                stroke={stroke}
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            )}
            <IsoBlock cx={cx} cy={y} delay={`${i * 0.25}s`} stroke={stroke} />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function HeroBlockchainBg() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      {/* Main chain — right */}
      <BlockChain count={3} className="hero-chain-right" floatDelay="0s" />

      {/* Secondary chains — same style, smaller & softer */}
      <BlockChain count={2} className="hero-chain-left" stroke="#c7f04a" floatDelay="-2.5s" />
      <BlockChain count={2} className="hero-chain-tl" stroke="#5b7cfa" floatDelay="-5s" />
      <BlockChain count={2} className="hero-chain-br" stroke="#c7f04a" floatDelay="-1.5s" />
      <BlockChain count={1} className="hero-chain-single" stroke="#5b7cfa" floatDelay="-3.5s" />

      <div className="hero-fade" />
    </div>
  );
}
