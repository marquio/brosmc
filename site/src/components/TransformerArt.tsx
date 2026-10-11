// Dibujo lineal de un transformador de distribución, decorativo.
export function TransformerArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {/* líneas de transmisión */}
      <path d="M-20 70 Q 260 130 540 60" opacity=".5" />
      <path d="M-20 70 Q 260 130 540 60" className="current-flow" strokeWidth="2.2" />
      <path d="M-20 95 Q 260 160 540 88" opacity=".35" />
      <path d="M-20 95 Q 260 160 540 88" className="current-flow" strokeWidth="1.8" style={{ animationDelay: "-1.2s" }} />
      {/* bushings de alta tensión */}
      {[170, 260, 350].map((x) => (
        <g key={x}>
          <path d={`M${x} 196 V120`} />
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse key={i} cx={x} cy={132 + i * 13} rx={14 - i * 0.6} ry="4.5" />
          ))}
          <circle cx={x} cy="114" r="5" />
        </g>
      ))}
      {/* tanque conservador */}
      <rect x="120" y="170" width="280" height="26" rx="13" />
      {/* tapa y cuba */}
      <rect x="110" y="206" width="300" height="14" rx="3" />
      <rect x="130" y="220" width="260" height="210" rx="6" />
      {/* aletas de refrigeración */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path key={`l${i}`} d={`M130 ${236 + i * 18} H92 V${246 + i * 18} H130`} opacity=".8" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <path key={`r${i}`} d={`M390 ${236 + i * 18} H428 V${246 + i * 18} H390`} opacity=".8" />
      ))}
      {/* placa y señal de riesgo eléctrico */}
      <rect x="215" y="270" width="90" height="60" rx="4" />
      <path d="M260 284 L282 320 H238 Z" />
      <path d="M263 293 L255 306 H264 L257 316" />
      {/* base */}
      <path d="M120 430 H400 M140 430 V452 M380 430 V452 M110 452 H410" />
    </svg>
  );
}
