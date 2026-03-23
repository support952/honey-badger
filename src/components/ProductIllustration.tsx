"use client";

import { motion } from "framer-motion";

const gold = "#facc15";
const goldDim = "rgba(250, 204, 21, 0.3)";
const goldFaint = "rgba(250, 204, 21, 0.08)";
const line = "rgba(255,255,255,0.06)";

const illustrationLabels: Record<string, string> = {
  "e2-full-blueprint": "E2 Visa Blueprint — US map with route lines",
  "custom-business-plan": "Custom Business Plan — document stack with seal",
  "financial-projections": "Financial Projections — 3D bar chart",
  "financial-model-excel": "Financial Model — spreadsheet grid",
  "multi-entity-planning": "Multi-Entity Planning — organizational chart",
  "cash-flow-analysis": "Cash Flow Analysis — flowing wave chart",
  "risk-compliance-review": "Risk & Compliance — shield with checkmark",
  "business-doc-package": "Document Package — file folder stack",
  "family-doc-package": "Family Package — connected people",
  "expedite-package": "Expedited Processing — clock with speed lines",
  "financial-template": "Financial Template — code editor with download",
  "financial-model-basic": "Basic Financial Model — spreadsheet grid",
};

/** Maps product IDs to unique SVG conceptual illustrations */
export default function ProductIllustration({ productId }: { productId: string }) {
  const Svg = illustrations[productId] ?? DefaultIllustration;
  const label = illustrationLabels[productId] ?? "Service illustration";
  return (
    <div className="w-full h-full flex items-center justify-center" role="img" aria-label={label}>
      <Svg />
    </div>
  );
}

/* ── Full E2 Visa Blueprint — Layered US map with gold route lines ── */
function BlueprintIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-32 sm:w-36 h-auto">
      {/* Base outline — abstracted US shape */}
      <path
        d="M30 75 L50 40 L80 30 L110 35 L140 25 L170 40 L175 60 L160 80 L130 85 L100 90 L70 85 L40 80 Z"
        stroke={goldDim}
        strokeWidth="0.5"
        fill={goldFaint}
      />
      {/* Route lines */}
      <motion.path
        d="M55 55 L90 45 L120 50 L155 45"
        stroke={gold}
        strokeWidth="1"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      {/* City nodes */}
      {[
        [55, 55], [90, 45], [120, 50], [155, 45],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill={gold}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.3, duration: 0.4 }}
        />
      ))}
      {/* Pulse ring on destination */}
      <motion.circle
        cx="155"
        cy="45"
        r="6"
        stroke={gold}
        strokeWidth="0.5"
        fill="none"
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Grid overlay */}
      {[30, 60, 90, 120, 150].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="100" stroke={line} strokeWidth="0.3" />
      ))}
      {[30, 50, 70, 90].map((y) => (
        <line key={y} x1="25" y1={y} x2="180" y2={y} stroke={line} strokeWidth="0.3" />
      ))}
    </svg>
  );
}

/* ── Financial Projections — Geometric 3D bar chart ── */
function ChartIllustration() {
  const bars = [
    { x: 45, h: 30 }, { x: 70, h: 45 }, { x: 95, h: 38 },
    { x: 120, h: 55 }, { x: 145, h: 48 },
  ];
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-32 sm:w-36 h-auto">
      {/* Base line */}
      <line x1="30" y1="95" x2="175" y2="95" stroke={goldDim} strokeWidth="0.5" />
      {/* Bars with isometric depth */}
      {bars.map((bar, i) => (
        <motion.g key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${bar.x + 8}px 95px` }}
        >
          {/* Front face */}
          <rect x={bar.x} y={95 - bar.h} width="16" height={bar.h} fill={goldFaint} stroke={goldDim} strokeWidth="0.5" />
          {/* Top face — isometric */}
          <path
            d={`M${bar.x} ${95 - bar.h} L${bar.x + 6} ${90 - bar.h} L${bar.x + 22} ${90 - bar.h} L${bar.x + 16} ${95 - bar.h} Z`}
            fill={gold}
            fillOpacity="0.12"
            stroke={goldDim}
            strokeWidth="0.3"
          />
          {/* Side face */}
          <path
            d={`M${bar.x + 16} ${95 - bar.h} L${bar.x + 22} ${90 - bar.h} L${bar.x + 22} ${90} L${bar.x + 16} ${95} Z`}
            fill={gold}
            fillOpacity="0.06"
            stroke={goldDim}
            strokeWidth="0.3"
          />
        </motion.g>
      ))}
      {/* Trend line */}
      <motion.path
        d="M53 68 L78 53 L103 60 L128 42 L153 50"
        stroke={gold}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </svg>
  );
}

/* ── Custom Business Plan — Document stack with seal ── */
function DocumentIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-28 sm:w-32 h-auto">
      {/* Back page */}
      <rect x="65" y="22" width="70" height="90" rx="2" fill="rgba(255,255,255,0.02)" stroke={line} strokeWidth="0.5" />
      {/* Middle page */}
      <rect x="60" y="18" width="70" height="90" rx="2" fill="rgba(255,255,255,0.03)" stroke={line} strokeWidth="0.5" />
      {/* Front page */}
      <motion.rect
        x="55" y="14" width="70" height="90" rx="2"
        fill="rgba(255,255,255,0.04)" stroke={goldDim} strokeWidth="0.5"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 14, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Text lines */}
      {[30, 40, 50, 60, 70].map((y) => (
        <rect key={y} x="65" y={y} width={y === 30 ? 40 : 30 + (y % 15)} height="1.5" rx="0.75" fill={line} />
      ))}
      {/* Gold seal */}
      <motion.circle
        cx="105" cy="88" r="10"
        stroke={gold} strokeWidth="0.8" fill={goldFaint}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      />
      <motion.path
        d="M101 88 L104 91 L110 85"
        stroke={gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      />
    </svg>
  );
}

/* ── Financial Model — Spreadsheet grid with formulas ── */
function SpreadsheetIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-32 sm:w-36 h-auto">
      {/* Grid */}
      <rect x="35" y="20" width="130" height="80" rx="2" stroke={goldDim} strokeWidth="0.5" fill={goldFaint} />
      {/* Column headers */}
      <rect x="35" y="20" width="130" height="12" rx="2" fill={gold} fillOpacity="0.08" />
      {/* Grid lines */}
      {[32, 44, 56, 68, 80].map((y) => (
        <line key={y} x1="35" y1={y} x2="165" y2={y} stroke={line} strokeWidth="0.3" />
      ))}
      {[70, 100, 130].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="100" stroke={line} strokeWidth="0.3" />
      ))}
      {/* Highlighted cell */}
      <motion.rect
        x="100" y="56" width="30" height="12"
        fill={gold} fillOpacity="0.1"
        stroke={gold} strokeWidth="0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Data dots */}
      {[[50, 38], [80, 50], [110, 44], [140, 62], [50, 50], [80, 62], [140, 74]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={12 + (i % 3) * 5} height="2" rx="1" fill={goldDim} />
      ))}
    </svg>
  );
}

/* ── Multi-Entity — Connected org chart ── */
function OrgChartIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-32 sm:w-36 h-auto">
      {/* Connecting lines */}
      <line x1="100" y1="40" x2="55" y2="70" stroke={goldDim} strokeWidth="0.5" />
      <line x1="100" y1="40" x2="145" y2="70" stroke={goldDim} strokeWidth="0.5" />
      <line x1="55" y1="80" x2="35" y2="100" stroke={goldDim} strokeWidth="0.5" />
      <line x1="55" y1="80" x2="75" y2="100" stroke={goldDim} strokeWidth="0.5" />
      <line x1="145" y1="80" x2="125" y2="100" stroke={goldDim} strokeWidth="0.5" />
      <line x1="145" y1="80" x2="165" y2="100" stroke={goldDim} strokeWidth="0.5" />
      {/* Nodes */}
      {[[100, 32], [55, 72], [145, 72], [35, 100], [75, 100], [125, 100], [165, 100]].map(([cx, cy], i) => (
        <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
        >
          <rect
            x={cx - (i === 0 ? 14 : 10)} y={cy - 8}
            width={i === 0 ? 28 : 20} height="16" rx="3"
            fill={i === 0 ? goldFaint : "rgba(255,255,255,0.03)"}
            stroke={i === 0 ? gold : goldDim}
            strokeWidth={i === 0 ? "0.8" : "0.5"}
          />
        </motion.g>
      ))}
    </svg>
  );
}

/* ── Cash Flow — Flowing wave with data points ── */
function CashFlowIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-32 sm:w-36 h-auto">
      <line x1="30" y1="95" x2="175" y2="95" stroke={line} strokeWidth="0.3" />
      <line x1="30" y1="20" x2="30" y2="95" stroke={line} strokeWidth="0.3" />
      <motion.path
        d="M30 70 Q60 30 90 55 Q120 80 150 40 Q165 25 175 35"
        stroke={gold}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Area fill */}
      <path
        d="M30 70 Q60 30 90 55 Q120 80 150 40 Q165 25 175 35 L175 95 L30 95 Z"
        fill="url(#cashGrad)"
      />
      <defs>
        <linearGradient id="cashGrad" x1="100" y1="20" x2="100" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gold} stopOpacity="0.08" />
          <stop offset="100%" stopColor={gold} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Risk & Compliance — Shield with checkmark ── */
function ShieldIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-24 sm:w-28 h-auto">
      <motion.path
        d="M100 15 L140 30 L140 65 Q140 90 100 105 Q60 90 60 65 L60 30 Z"
        stroke={goldDim}
        strokeWidth="0.8"
        fill={goldFaint}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      {/* Inner shield line */}
      <path
        d="M100 25 L132 37 L132 63 Q132 83 100 95 Q68 83 68 63 L68 37 Z"
        stroke={goldDim}
        strokeWidth="0.3"
        fill="none"
      />
      {/* Checkmark */}
      <motion.path
        d="M88 58 L96 66 L114 48"
        stroke={gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
    </svg>
  );
}

/* ── Document Package — File folder stack ── */
function FolderIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-28 sm:w-32 h-auto">
      {/* Folder back */}
      <path d="M55 35 L55 95 L150 95 L150 35 L110 35 L105 28 L75 28 L70 35 Z" fill="rgba(255,255,255,0.02)" stroke={line} strokeWidth="0.5" />
      {/* Tab */}
      <rect x="70" y="24" width="35" height="11" rx="2" fill={goldFaint} stroke={goldDim} strokeWidth="0.5" />
      {/* Document sheets inside */}
      <rect x="65" y="45" width="50" height="3" rx="1.5" fill={line} />
      <rect x="65" y="55" width="40" height="3" rx="1.5" fill={line} />
      <rect x="65" y="65" width="45" height="3" rx="1.5" fill={line} />
      {/* Gold clip */}
      <motion.rect
        x="125" y="40" width="12" height="20" rx="6"
        stroke={gold} strokeWidth="0.8" fill="none"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 40, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      />
    </svg>
  );
}

/* ── Expedited Processing — Lightning bolt / speed ── */
function SpeedIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-24 sm:w-28 h-auto">
      {/* Clock outline */}
      <circle cx="100" cy="60" r="38" stroke={goldDim} strokeWidth="0.5" fill={goldFaint} />
      <circle cx="100" cy="60" r="34" stroke={line} strokeWidth="0.3" fill="none" />
      {/* Tick marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x1 = Math.round((100 + Math.cos(angle) * 30) * 100) / 100;
        const y1 = Math.round((60 + Math.sin(angle) * 30) * 100) / 100;
        const x2 = Math.round((100 + Math.cos(angle) * 34) * 100) / 100;
        const y2 = Math.round((60 + Math.sin(angle) * 34) * 100) / 100;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={goldDim} strokeWidth={i % 3 === 0 ? "1" : "0.4"} />;
      })}
      {/* Hands */}
      <motion.line
        x1="100" y1="60" x2="100" y2="35"
        stroke={gold} strokeWidth="1.2" strokeLinecap="round"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 60px" }}
      />
      <line x1="100" y1="60" x2="120" y2="60" stroke={gold} strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="100" cy="60" r="2" fill={gold} />
      {/* Speed lines */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <line x1="148" y1="50" x2="160" y2="50" stroke={goldDim} strokeWidth="0.8" strokeLinecap="round" />
        <line x1="150" y1="60" x2="165" y2="60" stroke={goldDim} strokeWidth="0.6" strokeLinecap="round" />
        <line x1="148" y1="70" x2="158" y2="70" stroke={goldDim} strokeWidth="0.8" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

/* ── Family Package — People connected ── */
function FamilyIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-28 sm:w-32 h-auto">
      {/* Person 1 — center */}
      <circle cx="100" cy="38" r="10" stroke={gold} strokeWidth="0.8" fill={goldFaint} />
      <path d="M82 70 Q82 55 100 52 Q118 55 118 70" stroke={gold} strokeWidth="0.8" fill={goldFaint} />
      {/* Person 2 — left */}
      <circle cx="60" cy="50" r="8" stroke={goldDim} strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
      <path d="M46 75 Q46 63 60 60 Q74 63 74 75" stroke={goldDim} strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
      {/* Person 3 — right */}
      <circle cx="140" cy="50" r="8" stroke={goldDim} strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
      <path d="M126 75 Q126 63 140 60 Q154 63 154 75" stroke={goldDim} strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
      {/* Connection lines */}
      <motion.line x1="80" y1="55" x2="72" y2="55" stroke={goldDim} strokeWidth="0.5" strokeDasharray="3 2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
      <motion.line x1="120" y1="55" x2="128" y2="55" stroke={goldDim} strokeWidth="0.5" strokeDasharray="3 2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
      {/* Base */}
      <line x1="40" y1="90" x2="160" y2="90" stroke={line} strokeWidth="0.3" />
    </svg>
  );
}

/* ── Digital Template — Download/code icon ── */
function TemplateIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-28 sm:w-32 h-auto">
      {/* Screen */}
      <rect x="50" y="20" width="100" height="70" rx="4" stroke={goldDim} strokeWidth="0.5" fill={goldFaint} />
      <rect x="50" y="20" width="100" height="10" rx="4" fill={gold} fillOpacity="0.06" />
      {/* Dots in header */}
      <circle cx="60" cy="25" r="1.5" fill={goldDim} />
      <circle cx="67" cy="25" r="1.5" fill={goldDim} />
      <circle cx="74" cy="25" r="1.5" fill={goldDim} />
      {/* Code lines */}
      {[40, 50, 60, 70].map((y, i) => (
        <rect key={y} x={60 + (i % 2) * 8} y={y} width={30 + (i * 7) % 20} height="2" rx="1" fill={line} />
      ))}
      {/* Download arrow */}
      <motion.g initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.4 }}>
        <line x1="100" y1="98" x2="100" y2="110" stroke={gold} strokeWidth="1" strokeLinecap="round" />
        <path d="M94 106 L100 112 L106 106" stroke={gold} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      {/* Stand */}
      <line x1="85" y1="90" x2="115" y2="90" stroke={line} strokeWidth="0.5" />
      <line x1="100" y1="90" x2="100" y2="97" stroke={line} strokeWidth="0.5" />
    </svg>
  );
}

/* ── Default — Abstract hexagon (Honey Badger brand mark) ── */
function DefaultIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-24 sm:w-28 h-auto">
      <motion.path
        d="M100 20 L140 40 L140 80 L100 100 L60 80 L60 40 Z"
        stroke={goldDim}
        strokeWidth="0.8"
        fill={goldFaint}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <path
        d="M100 35 L125 47 L125 73 L100 85 L75 73 L75 47 Z"
        stroke={line}
        strokeWidth="0.3"
        fill="none"
      />
      <circle cx="100" cy="60" r="4" fill={gold} fillOpacity="0.3" />
    </svg>
  );
}

const illustrations: Record<string, () => React.JSX.Element> = {
  "e2-full-blueprint": BlueprintIllustration,
  "custom-business-plan": DocumentIllustration,
  "financial-projections": ChartIllustration,
  "financial-model-excel": SpreadsheetIllustration,
  "multi-entity-planning": OrgChartIllustration,
  "cash-flow-analysis": CashFlowIllustration,
  "risk-compliance-review": ShieldIllustration,
  "business-doc-package": FolderIllustration,
  "family-doc-package": FamilyIllustration,
  "expedite-package": SpeedIllustration,
  "financial-template": TemplateIllustration,
  "financial-model-basic": SpreadsheetIllustration,
};
