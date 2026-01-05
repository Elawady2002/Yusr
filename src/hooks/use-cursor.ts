import { useEffect, useState } from "react";

const CURSOR_DATA = [
    { file: "Group 125.svg", color: "#176E70" },
    { file: "Group 126.svg", color: "#F47E53" },
    { file: "Group 129.svg", color: "#4C8F6A" }
];

interface CursorState {
    activeColor: string | null;
    hoverRect: DOMRect | null;
}

export function useCursor(): CursorState {
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

        // 3. Mouse Move Handler for Word Detection and Highlight
        const handleMouseMove = (e: MouseEvent) => {
            let range: Range | null = null;

            // Get range from point (Cross-browser support)
            // @ts-ignore - TypeScript compatibility
            if (document.caretPositionFromPoint) {
                // @ts-ignore
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

    return { activeColor, hoverRect };
}
