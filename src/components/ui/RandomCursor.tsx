"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CURSOR_FILES = [
    "Group 125.svg",
    "Group 126.svg",
    "Group 129.svg"
];

export function RandomCursor() {
    const [selectedCursor, setSelectedCursor] = useState<string | null>(null);

    // Use motion values for direct updates (better performance than state)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for realistic movement
    const springConfig = { damping: 25, stiffness: 450, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Select a random cursor on mount
        const random = CURSOR_FILES[Math.floor(Math.random() * CURSOR_FILES.length)];
        setSelectedCursor(random);

        // Hide default cursor globally
        const style = document.createElement("style");
        style.innerHTML = `
            *, body, button, a, [role="button"], .cursor-pointer {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            document.head.removeChild(style);
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!selectedCursor) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-9999 flex flex-col items-start"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            {/* The Mouse Cursor Image */}
            <img
                src={`/Yusr/assets/Cursors/${selectedCursor}`}
                alt="Cursor"
                className="w-24 h-24 drop-shadow-md"
                style={{ transform: "rotate(-15deg)" }}
            />
        </motion.div>
    );
}
