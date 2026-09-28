import React from 'react';

export default function MetricBadge({ label, value, variant = "default" }) {
  const variantStyles = {
    default: "bg-[#180e1d] border-[#873b70]/80 text-[#ffadbc] hover:border-[#d98ab5]",
    accent: "bg-[#873b70]/20 border-[#975d8e] text-white hover:border-[#ffadbc]",
    highlight: "bg-[#180e1d] border-[#d98ab5] text-[#ffadbc]",
  };

  return (
    <div
      className={`inline-flex flex-col px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 ${variantStyles[variant] || variantStyles.default}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-stone-400">{label}</span>
      <span className="font-semibold text-white text-sm mt-0.5">{value}</span>
    </div>
  );
}
