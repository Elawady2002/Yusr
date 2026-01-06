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

export function useCursor(): { activeColor: string | null } {
    const [activeColor, setActiveColor] = useState<string | null>(null);

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

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return { activeColor };
}
