"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ArrowRight, Video, CheckCircle2, Star, User, Ticket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RegistrationModal } from "@/components/features/events/RegistrationModal";

export default function EventsPage() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    return (
        <main className="min-h-screen bg-background">
            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
            />

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
                            الافتتاح الرسمي
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight md:leading-snug">
                            يُسر | أول <span dir="ltr">Bootcamp Experience</span> حقيقية
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
                            مش بنعلّمك أكتر… بنعلّمك صح.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground border-y border-border/50 py-6 w-full max-w-3xl">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>الاثنين، 26 يناير</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>10 ص : 3 م</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-2">
                                <Ticket className="w-5 h-5 text-primary" />
                                <span>سعر التذكرة 50 جنية</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <a
                                href="https://maps.app.goo.gl/w2xXASf9gPiaffkK6?g_st=ipc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-primary transition-colors hover:underline group"
                            >
                                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                <span>الزقازيق</span>
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                            <Button
                                size="lg"
                                className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-bold group"
                                onClick={() => setIsRegistrationOpen(true)}
                            >
                                سجّل مكانك دلوقتي
                                <ArrowRight className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground/80">
                            ⚡ الأماكن محدودة علشان نركّز على التجربة مش العدد.
                        </p>
                    </div>
                </div>

                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50" />
            </section>

            {/* 2. About the Event */}
            {/* 2. About the Event */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center text-center space-y-12">
                        <div className="space-y-6 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold">ليه إيفنت يُسر مختلف؟</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                إيفنت الافتتاح بتاع يُسر مش محاضرة ولا توك تقليدي. ده أول خطوة في بناء Bootcamp Academy بتشتغل على الفهم، التطبيق، والتأهيل الحقيقي لسوق العمل.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-background border shadow-sm">
                                <div className="bg-primary/10 p-3 rounded-full w-fit">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">هتفهم يعني إيه UX بجد</h3>
                                <p className="text-muted-foreground text-sm">مش بس تسمع عنه، بنركز على الجوهر وطريقة التفكير.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-background border shadow-sm">
                                <div className="bg-primary/10 p-3 rounded-full w-fit">
                                    <Star className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">تجربة تعليم مختلفة</h3>
                                <p className="text-muted-foreground text-sm">بعيداً عن التلقين والمحتوى المكرر، تجربة تفاعلية حقيقية.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-background border shadow-sm">
                                <div className="bg-primary/10 p-3 rounded-full w-fit">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">خارطة طريق واضحة</h3>
                                <p className="text-muted-foreground text-sm">عشان تعرف تبدأ منين وتوصل فين، بخطوات عملية ومدروسة.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* 3. Agenda */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">هنعمل إيه في اليوم ده؟</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { id: "01", title: "إزاي تبدأ المشروع من أول الفكرة", desc: "من اللخبطة الأولى لحد ما يبقى عندك اتجاه واضح وخطة تمشي عليها." },
                            { id: "02", title: "إزاي تشتغل على UX Process بشكل صح", desc: "نفهم التفكير قبل الأدوات، ونطبّق الـ UX خطوة بخطوة على مشروع حقيقي." },
                            { id: "03", title: "أدوات الذكاء الاصطناعي في مجالنا", desc: "إزاي تستغل الـ AI يسهّل عليك الشغل، يوفّر وقتك، ويقوّي قراراتك كمصمم." },
                            { id: "04", title: "شغل عملي وتطبيق حقيقي طول اليوم", desc: "تاسكات تفاعلية، نقاش، وتجربة بإيدك مش مجرد فرجة أو كلام نظري." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border bg-card hover:shadow-md transition-all group">
                                <div className="sm:w-16 shrink-0 flex items-start justify-center">
                                    <div className="w-14 h-14 rounded-3xl bg-[#E8F5E9] text-[#1caf5e] flex items-center justify-center font-bold text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                        {item.id}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Speakers */}
            <section className="py-16 bg-muted/30">
                <div className="container px-4 md:px-6 max-w-[1400px] text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">مين اللي هيكون معاك؟</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
                        {[
                            {
                                name: "أمير يسري",
                                role: "Founder of Yusr",
                                image: "/assets/ai.webp"
                            },
                            {
                                name: "زياد طوسن",
                                role: "Product Designer & Mentor",
                                image: "/assets/بروفايل.webp"
                            },
                            {
                                name: "عمرو خالد",
                                role: "UI/UX Designer & Mentor",
                                image: "/assets/amr.webp"
                            },
                            {
                                name: "عبدالله العوضي",
                                role: "Product Designer",
                                image: "/assets/IMG_0052.webp"
                            },
                            {
                                name: "إسلام مُغازي",
                                role: "UX Designer & Mentor",
                                image: "/assets/eslam.jpeg"
                            },
                        ].map((speaker, i) => (
                            <div key={i} className="group relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Image */}
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-right flex flex-col items-end">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{speaker.name}</h3>
                                    <p className="text-gray-300 text-xs md:text-sm font-medium">{speaker.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-muted-foreground font-medium">
                        مش بنجيب ناس بتتكلم… بنجيب ناس بتفهم وتشتغل.
                    </p>
                </div>
            </section>

        </main>
    );
}
