"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle, Users } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
            <div className="container-responsive relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Right Content (Text) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start text-start space-y-8"
                >
                    {/* Compact Social Proof Badge */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-4 rounded-full border border-gray-100 bg-white px-8 py-2.5 shadow-xl shadow-gray-200/50 cursor-default mb-6 overflow-hidden w-fit"
                    >
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                            {[
                                "/Yusr/assets/بروفايل.jpg",
                                "/Yusr/assets/ai.jpg",
                                "/Yusr/assets/amr.png",
                                "/Yusr/assets/IMG_0052.jpg"
                            ].map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-gray-100 relative overflow-hidden ring-1 ring-gray-100">
                                    <Image
                                        src={src}
                                        alt="User"
                                        fill
                                        className="object-cover"
                                        sizes="40px"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-1.5 font-bold text-gray-900">
                                <div className="flex text-yellow-500 text-sm">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="drop-shadow-sm">★</span>)}
                                </div>
                                <span className="text-lg leading-none pt-1">500+</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 leading-tight">مصمم انضموا إلينا</span>
                        </div>
                    </motion.div>

                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight pt-4">
                        بدل ما تتعلم كتير...
                        <br />
                        <span className="text-primary px-2 inline-block">اتعلم بيُسر</span>
                    </h1>

                    <p className="text-base text-muted-foreground md:text-xl max-w-2xl leading-relaxed">
                        تعلم منهجية تبسيط التعقيد من خلال ورش عمل عملية، ومشاريع حقيقية تأخذ بيدك من الأساسيات إلى الاحتراف.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6">
                        <Button size="lg" className="w-full sm:w-auto text-lg font-bold py-6 px-8 h-14 rounded-full shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
                            <Link href="/about">من نحن</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg py-6 px-8 h-14 rounded-full border-2 hover:bg-muted/50 hover:text-primary flex items-center justify-center gap-3" asChild>
                            <Link href="https://whatsapp.com/channel/0029VajBHqo8qIzyWzK6S938" target="_blank">
                                <Users className="w-6 h-6" />
                                <span className="font-bold">زيارة المجتمع</span>
                            </Link>
                        </Button>
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
                        <div className="relative w-full h-full px-4">
                            <Image
                                src="/Yusr/assets/photoـamir.jpg"
                                alt="تدريب عملي في بوتكامب تجربة المستخدم"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] bg-white/90 backdrop-blur-xl border border-white/50 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-between gap-4 animate-in slide-in-from-bottom-6 duration-700 delay-300">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <PlayCircle className="w-7 h-7 fill-current" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-foreground mb-0.5">ورش عمل تفاعلية</p>
                                    <p className="text-sm font-medium text-muted-foreground">أكثر من 20 ساعة تطبيق عملي</p>
                                </div>
                            </div>
                            <div className="w-12 h-12 relative shrink-0">
                                <span className="absolute inset-0 rounded-full border-[3px] border-primary/20 border-t-primary animate-spin-slow"></span>
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
