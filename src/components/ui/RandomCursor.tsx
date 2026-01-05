"use client";

import { useCursor } from "@/hooks/use-cursor";

export function RandomCursor() {
    const { activeColor, hoverRect } = useCursor();

    if (!activeColor) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: hoverRect ? hoverRect.top : -100, // Move off-screen if null to preserve animation
                left: hoverRect ? hoverRect.left : -100,
                width: hoverRect ? hoverRect.width : 0,
                height: hoverRect ? hoverRect.height : 0,
                backgroundColor: activeColor,
                opacity: hoverRect ? 0.25 : 0, // Semi-transparent marker effect
                pointerEvents: "none",
                zIndex: 9999,
                borderRadius: "4px",
                transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s linear", // Smooth "pen" ease
                mixBlendMode: "multiply", // Accurate marker blending
            }}
        />
    );
}
