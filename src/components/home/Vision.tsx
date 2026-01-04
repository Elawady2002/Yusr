"use client";

import { motion } from "framer-motion";

export function Vision() {
    return (
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="container-responsive relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-2xl font-bold sm:text-4xl mb-4 md:mb-6">رؤيتنا</h2>
                    <p className="text-lg md:text-2xl leading-relaxed text-primary-foreground/90">
                        "نؤمن في يُسر بأن التصميم العظيم هو الذي يختفي من أمام المستخدم، تاركاً له التجربة النقية.
                        وهدفنا هو تمكين المصممين العرب من امتلاك أدوات التفكير المنطقي والبحث العلمي،
                        للمنافسة بثقة في السوق العالمي وبناء منتجات رقمية تحترم عقل الإنسان."
                    </p>
                    <div className="mt-8">
                        <span className="font-bold text-lg block">— أمير يسري</span>
                        <span className="text-primary-foreground/70 text-sm">مؤسس يُسر</span>
                    </div>
                </motion.div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px] mix-blend-overlay pointer-events-none" />
        </section>
    );
}
