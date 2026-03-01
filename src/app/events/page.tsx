"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, MoveLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const events = [
    {
        id: "the-ai-handoff-sprint",
        title: "The AI Handoff Sprint",
        date: "قريباً",
        time: "يعلن لاحقاً",
        location: "أونلاين (Zoom)",
        description: "تعلم كيفية تسليم تصاميمك للمطورين كالمحترفين باستخدام أدوات الذكاء الاصطناعي في بيئة عمل حقيقية وتطبيق عملي خطوة بخطوة.",
        image: "/assets/ai.webp",
        href: "/events/the-ai-handoff-sprint",
        status: "عرض التفاصيل",
        isActive: true,
        badgeText: "قريباً",
        badgeColor: "bg-primary text-white"
    },
    {
        id: "yusr-inaugural",
        title: "الايفنت الافتتاحي ليسر",
        date: "الخميس، 29 يناير",
        time: "10 ص : 3 م",
        location: "الزقازيق",
        description: "يُسر | أول Bootcamp Experience حقيقية. مش بنعلّمك أكتر… بنعلّمك صح. يوم كامل من التطبيق العملي والمحاضرات المكثفة.",
        image: "/assets/Post_Cover.png",
        href: "/events/yusr-inaugural",
        status: "عن اللقاء",
        isActive: false,
        badgeText: "انتهى",
        badgeColor: "bg-slate-100/90 text-slate-600 backdrop-blur-md"
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 pb-24">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
                {/* 3D Grid Background */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50/50 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="container px-4 relative z-10 flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-sm md:text-base font-bold text-slate-700">فعاليات يُسر القادمة</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-[#1e293b] leading-[1.2] max-w-5xl mx-auto drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        يوم الانطلاق هيبدأ بقوة
                        <br />
                        <span className="text-[#334155] text-4xl md:text-6xl lg:text-[4.5rem] mt-4 block">مع مبدعين على القمة</span>
                    </h1>

                    {/* Custom Arrow Decoration */}
                    <div className="mt-12 flex items-center justify-center w-full max-w-[320px] text-[#334155] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 opacity-90 transition-transform hover:scale-105">
                        <div className="h-[2px] w-full bg-[#334155] rounded-full flex-1"></div>
                        <MoveLeft className="w-10 h-10 -ml-4" strokeWidth={2} />
                    </div>
                </div>
            </section>

            {/* Events Grid Section */}
            <section className="container mx-auto px-4 mt-4 relative z-10">
                <div className="flex flex-wrap justify-center gap-6 max-w-[850px] mx-auto">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`group relative w-full sm:w-[calc(50%-0.75rem)] max-w-[380px] flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-12 delay-[400ms]`}
                            style={{ animationFillMode: 'both', animationDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Image container */}
                            <div className="relative w-full h-52 md:h-60 overflow-hidden p-3 md:p-3 pb-0">
                                <Link href={event.href} className="block relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-50 flex items-center justify-center">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient for contrast */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 z-10">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 ${event.badgeColor}`}>
                                            {event.badgeText}
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <Link href={event.href} className="block w-fit text-center mx-auto w-full">
                                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                </Link>

                                <p className="text-slate-500 mb-6 text-center line-clamp-2 leading-relaxed text-sm md:text-base font-medium px-2">{event.description}</p>

                                <div className="flex flex-wrap justify-center gap-y-3 gap-x-4 text-[13px] md:text-sm font-bold text-slate-600 mb-6 mt-auto bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 shadow-inner">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                            <Calendar className="w-3 h-3 text-primary" />
                                        </div>
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                            <Clock className="w-3 h-3 text-primary" />
                                        </div>
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 w-full justify-center mt-1">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                            <MapPin className="w-3 h-3 text-primary" />
                                        </div>
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="w-full">
                                    <Button
                                        asChild
                                        className={`w-full h-11 rounded-xl text-base font-bold transition-all shadow-lg hover:-translate-y-0.5 ${event.isActive ? 'bg-[#52B788] hover:bg-[#40916C] text-white shadow-[#52B788]/25 hover:shadow-[#52B788]/40' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm hover:shadow-md'}`}
                                    >
                                        <Link href={event.href}>{event.status}</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
