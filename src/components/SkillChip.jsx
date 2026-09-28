import React from 'react';

export default function SkillChip({ name, size = "md", active = false }) {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-xs sm:text-sm",
    lg: "px-4 py-2 text-sm"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono rounded-md border transition-all duration-200 cursor-default select-none ${sizeClasses[size]} ${
        active
          ? "bg-[#873b70]/30 border-[#d98ab5] text-[#ffadbc]"
          : "bg-[#180e1d]/85 border-[#873b70]/70 text-stone-200 hover:text-white hover:border-[#d98ab5] hover:bg-[#873b70]/25"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#d98ab5]"></span>
      {name}
    </span>
  );
}
