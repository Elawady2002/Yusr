"use client";

import { motion } from "framer-motion";

const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Vodafone",
    "Fawry",
    "Instapay",
];

export function Partners() {
    return (
        <section className="py-12 bg-muted/30 border-y">
            <div className="container-responsive text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-8">
                    شركاء النجاح والشركات التي تدربت معنا
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                    {/* Replace with actual logos later */}
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-bold font-mono text-muted-foreground/60 hover:text-primary cursor-default"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
