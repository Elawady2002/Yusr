"use client";

import { useEffect } from "react";

const CURSOR_FILES = [
    "Group 125.svg",
    "Group 126.svg",
    "Group 129.svg"
];

export function RandomCursor() {
    useEffect(() => {
        // Select a random cursor on mount
        const random = CURSOR_FILES[Math.floor(Math.random() * CURSOR_FILES.length)];
        const cursorUrl = `/Yusr/assets/Cursors/${random}`;

        // Create style element for Native CSS Cursor
        // This replaces the JS-calculated position with the browser's native rendering
        // Solves issues with: Double cursors, Window focus/blur, Latency
        const style = document.createElement("style");

        // We apply !important to override any other specific styles
        // We explicitly target interactable elements to ensure they don't revert to 'pointer'
        style.innerHTML = `
            @media (pointer: fine) {
                html, body, * {
                    cursor: url('${cursorUrl}'), auto !important;
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    // No visible DOM element needed anymore, the browser handles it
    return null;
}
