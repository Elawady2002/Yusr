"use client";

import { useEffect, useState } from "react";

const CURSOR_DATA = [
    { file: "Group 125.svg", color: "#176E70" },
    { file: "Group 126.svg", color: "#F47E53" },
    { file: "Group 129.svg", color: "#4C8F6A" }
];

export function RandomCursor() {
    const [activeColor, setActiveColor] = useState<string | null>(null);
    const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        // 1. Initial Setup (Cursor Selection)
        const randomData = CURSOR_DATA[Math.floor(Math.random() * CURSOR_DATA.length)];
        const cursorUrl = `/Yusr/assets/Cursors/${randomData.file}`;
        setActiveColor(randomData.color);

        // 2. Global Custom Cursor Styles
        const style = document.createElement("style");
        style.innerHTML = `
            @media (pointer: fine) {
                html, body, * {
                    cursor: url('${cursorUrl}'), auto !important;
                }
            }
            /* Selection color matches cursor */
            ::selection {
                background-color: ${randomData.color};
                color: white;
            }
        `;
        document.head.appendChild(style);

        // 3. Mouse Move Handler for Word Detection
        const handleMouseMove = (e: MouseEvent) => {
            let range: Range | null = null;

            // Get range from point (Cross-browser support)
            if (document.caretPositionFromPoint) {
                // @ts-ignore - TypeScript might not know about caretPositionFromPoint yet
                const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
                if (pos && pos.offsetNode && pos.offsetNode.nodeType === Node.TEXT_NODE) {
                    range = document.createRange();
                    range.setStart(pos.offsetNode, pos.offset);
                    range.setEnd(pos.offsetNode, pos.offset);
                }
            } else if (document.caretRangeFromPoint) {
                range = document.caretRangeFromPoint(e.clientX, e.clientY);
            }

            // Validation: Must be a text node
            if (!range || range.startContainer.nodeType !== Node.TEXT_NODE) {
                setHoverRect(null);
                return;
            }

            // Expand to word boundaries
            const textNode = range.startContainer as Text;
            const text = textNode.textContent || "";
            const offset = range.startOffset;

            // Check if we are actually ON a word character (not whitespace)
            // This prevents the marker from jumping when hovering spaces between words
            if (!/\S/.test(text[offset] || "") && !/\S/.test(text[offset - 1] || "")) {
                setHoverRect(null);
                return;
            }

            let start = offset;
            while (start > 0 && /\S/.test(text[start - 1])) {
                start--;
            }

            let end = offset;
            while (end < text.length && /\S/.test(text[end])) {
                end++;
            }

            if (start !== end) {
                const wordRange = document.createRange();
                wordRange.setStart(textNode, start);
                wordRange.setEnd(textNode, end);
                const rect = wordRange.getBoundingClientRect();
                setHoverRect(rect);
            } else {
                setHoverRect(null);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

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
