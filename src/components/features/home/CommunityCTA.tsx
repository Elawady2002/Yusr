"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { COMMUNITY_CTA_DATA } from "@/data/home";

export function CommunityCTA() {
    return (
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="container-responsive relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-2xl font-bold sm:text-4xl mb-4 md:mb-6">
                        {COMMUNITY_CTA_DATA.title}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-8">
                        {COMMUNITY_CTA_DATA.description}
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg font-bold py-6 px-8 h-14 rounded-full shadow-xl hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all gap-3"
                        asChild
                    >
                        <Link href={COMMUNITY_CTA_DATA.cta.href} target="_blank">
                            <Users className="w-6 h-6" />
                            {COMMUNITY_CTA_DATA.cta.label}
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px] mix-blend-overlay pointer-events-none" />
        </section>
    );
}
