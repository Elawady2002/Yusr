"use client";

import { motion } from "framer-motion";
import { APPROACH_DATA } from "@/data/home";

export function Approach() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container-responsive">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-2xl font-bold sm:text-4xl mb-4 md:mb-6">
                        {APPROACH_DATA.title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {APPROACH_DATA.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
