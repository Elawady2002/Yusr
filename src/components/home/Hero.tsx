"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-28">
            <div className="container max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Right Content (Text) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start text-start space-y-8"
                >
                    <div className="inline-flex items-center rounded-full border bg-muted/30 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 ml-1 animate-pulse"></span>
                        متاح الحجز الآن للدفعة القادمة
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2]">
                        رحلتك لتصبح
                        <br />
                        مصمم
                        <span className="text-primary px-2">تجربة مستخدم</span>
                        <br />
                        عالمي تبدأ هنا
                    </h1>

                    <p className="text-lg text-muted-foreground md:text-2xl max-w-2xl leading-relaxed">
                        تعلم منهجية تبسيط التعقيد من خلال ورش عمل عملية، ومشاريع حقيقية تأخذ بيدك من الأساسيات إلى الاحتراف.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                        <Button size="lg" className="text-lg font-bold px-10 h-14 rounded-full shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
                            <Link href="/bootcamp">تصفح البوتكامب</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-muted/50 flex items-center gap-3" asChild>
                            <Link href="/about">
                                <PlayCircle className="w-6 h-6" />
                                شاهد الفيديو التعريفي
                            </Link>
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="pt-8 flex items-center gap-5">
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground overflow-hidden shadow-sm">
                                    {/* Placeholder avatars */}
                                    <div className="w-full h-full bg-gray-200"></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                                <span className="font-black text-xl">+500</span>
                                <span className="flex gap-0.5 text-yellow-500">★★★★★</span>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">مصمم انضموا إلينا</span>
                        </div>
                    </div>
                </motion.div>

                {/* Left Content (Image/Visual) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
                >
                    <div className="relative aspect-4/3 rounded-[2.5rem] overflow-hidden bg-transparent shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
                        {/* Hero Image */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/hero_section.png"
                                alt="تدريب عملي في بوتكامب تجربة المستخدم"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-lg flex items-center justify-between gap-4 animate-in slide-in-from-bottom-6 duration-700 delay-300">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary">
                                    <PlayCircle className="w-7 h-7 fill-primary stroke-none" />
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900">ورش عمل تفاعلية</p>
                                    <p className="text-sm text-gray-500">أكثر من 20 ساعة تطبيق عملي</p>
                                </div>
                            </div>
                            <div className="w-16 h-16 relative">
                                {/* Mini chart or visual decoration */}
                                <span className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin-slow"></span>
                            </div>
                        </div>
                    </div>

                    {/* Back decoration blobs */}
                    <div className="absolute -top-16 -right-16 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
                    <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
                </motion.div>
            </div>
        </section>
    );
}
