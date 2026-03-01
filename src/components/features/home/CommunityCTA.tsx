"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { COMMUNITY_CTA_DATA } from "@/data/home";

export function CommunityCTA() {
    return (
        <section className="py-16 md:py-24 bg-background text-foreground relative overflow-hidden">
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
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                        {COMMUNITY_CTA_DATA.description}
                    </p>
                    <Button
                        size="lg"
                        className="text-lg font-bold py-6 px-8 h-14 rounded-full shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all gap-3"
                        asChild
                    >
                        <Link href={COMMUNITY_CTA_DATA.cta.href} target="_blank">
                            <Users className="w-6 h-6" />
                            {COMMUNITY_CTA_DATA.cta.label}
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
