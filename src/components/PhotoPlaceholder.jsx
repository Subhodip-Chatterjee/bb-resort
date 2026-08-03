import React from "react";
import { Image as ImageIcon } from "lucide-react";

export default function PhotoPlaceholder({ label, tone = "navy", className = "", icon: Icon = ImageIcon, style }) {
  return (
    <div className={`ph ph--${tone} ${className}`} style={style} role="img" aria-label={`${label} — photo coming soon`}>
      <div className="ph__inner">
        <Icon size={20} strokeWidth={1.25} />
        <span>{label}</span>
      </div>
    </div>
  );
}
