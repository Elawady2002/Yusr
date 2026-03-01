"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FOUNDER_DATA } from "@/data/home";

export function Founder() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container-responsive">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto w-full max-w-[400px]"
                    >
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-muted shadow-2xl">
                            <Image
                                src={FOUNDER_DATA.image}
                                alt={FOUNDER_DATA.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10" />
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-[60px] -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                                {FOUNDER_DATA.name}
                            </h2>
                            <p className="text-lg text-primary font-semibold">
                                {FOUNDER_DATA.title}
                            </p>
                        </div>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {FOUNDER_DATA.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
