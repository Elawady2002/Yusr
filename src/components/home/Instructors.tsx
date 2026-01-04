"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const instructors = [
    {
        name: "أمير يسري",
        role: "Founder of Yusr",
        image: "/Yusr/assets/ai.jpg",
        company: "Yusr",
        linkedin: "https://www.linkedin.com/in/amir-yousry-2bb306283/",
    },
    {
        name: "زياد طوسن",
        role: "Product Designer & Mentor",
        image: "/Yusr/assets/بروفايل.jpg",
        company: "Microsoft",
        linkedin: "https://www.linkedin.com/in/zyadtoson/",
    },
    {
        name: "عمرو خالد",
        role: "UI/UX Designer & Mentor",
        image: "/Yusr/assets/amr.png",
        company: "Talabat",
        linkedin: "https://www.linkedin.com/in/amr-5aled/",
    },
    {
        name: "عبدالله العوضي",
        role: "Product Designer",
        image: "/Yusr/assets/IMG_0052.jpg",
        company: "B2",
        linkedin: "https://www.linkedin.com/in/abdullah-elawady-019129330/",
    },
    {
        name: "كريم يسري",
        role: "Flutter Developer",
        image: "/Yusr/assets/kareem_yousry.jpeg",
        company: "Yusr",
        linkedin: "https://www.linkedin.com/in/kareem-yousry/",
    },
    {
        name: "سارة طارق",
        role: "Product Designer",
        image: "/Yusr/assets/1738272331493.jpeg",
        company: "Booking.com",
        linkedin: "https://www.linkedin.com/in/saratarek-/",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const },
};

export function Instructors() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container-responsive">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold mb-4"
                    >
                        فريق يُسر
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        فريق من الخبراء يجمع بين الخبرة الأكاديمية والعملية في كبرى الشركات التقنية
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center"
                >
                    {instructors.map((inst, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="group relative w-full cursor-pointer max-w-[300px] mx-auto sm:max-w-none"
                        >
                            <Link href={inst.linkedin} target={inst.linkedin !== "#" ? "_blank" : undefined}>
                                <div className="relative overflow-hidden rounded-3xl aspect-3/4 mb-4 bg-muted">
                                    <Image
                                        src={inst.image}
                                        alt={inst.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    <div className="absolute bottom-0 p-6 w-full text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-bold text-xl mb-1">{inst.name}</h3>
                                        <p className="text-sm font-medium text-white/90 mb-2">{inst.role}</p>

                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
