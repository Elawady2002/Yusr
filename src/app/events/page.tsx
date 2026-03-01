"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, MoveLeft, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const events = [
    {
        id: "the-ai-handoff-sprint",
        title: "The AI Handoff Sprint",
        date: "السبت والأحد 7 و 8",
        time: "الموعد لاحقاً",
        location: "أونلاين (Zoom)",
        seats: "80 مقعد",
        description: "تعلم كيفية تسليم تصاميمك للمطورين كالمحترفين باستخدام أدوات الذكاء الاصطناعي في بيئة عمل حقيقية وتطبيق عملي خطوة بخطوة.",
        image: "/assets/image.png",
        href: "/events/the-ai-handoff-sprint",
        status: "عرض التفاصيل",
        isActive: true,
        badgeText: "قريباً",
        badgeColor: "bg-[#52B788] text-white shadow-[#52B788]/20"
    },
    {
        id: "yusr-inaugural",
        title: "الايفنت الافتتاحي ليسر",
        date: "الخميس، 29 يناير",
        time: "10 ص : 3 م",
        location: "الزقازيق",
        seats: "اكتمل العدد",
        description: "يُسر | أول Bootcamp Experience حقيقية. مش بنعلّمك أكتر… بنعلّمك صح. يوم كامل من التطبيق العملي والمحاضرات المكثفة.",
        image: "/assets/Post_Cover.png",
        href: "/events/yusr-inaugural",
        status: "عن اللقاء",
        isActive: false,
        badgeText: "انتهى",
        badgeColor: "bg-slate-200/80 text-slate-700 backdrop-blur-md"
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-24">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center">
                {/* 3D Grid Background */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50/50 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#52B788]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="container px-4 relative z-10 flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Sparkles className="w-5 h-5 text-[#52B788]" />
                        <span className="text-sm md:text-base font-bold text-slate-700">فعاليات يُسر القادمة</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-[#1e293b] leading-[1.2] max-w-5xl mx-auto drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        رحلتك في تعلم التقنية
                        <br />
                        <span className="text-[#334155] text-4xl md:text-6xl lg:text-[4.5rem] mt-4 block">تبدأ مع يُسر</span>
                    </h1>

                    {/* Custom Arrow Decoration */}
                    <div className="mt-12 flex items-center justify-center w-full max-w-[320px] text-[#334155] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 opacity-90 transition-transform hover:scale-105">
                        <div className="h-[2px] w-full bg-[#334155] rounded-full flex-1"></div>
                        <MoveLeft className="w-10 h-10 -ml-4" strokeWidth={2} />
                    </div>
                </div>
            </section>

            {/* Events Grid Section */}
            <section className="container mx-auto px-4 mt-2 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-[1000px] mx-auto">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`group relative flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-12 delay-[400ms]`}
                            style={{ animationFillMode: 'both', animationDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Image container */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden bg-slate-50">
                                <Link href={event.href} className="block relative w-full h-full border-b border-slate-100">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-5 right-5 z-10">
                                        <span className={`px-5 py-2 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105 ${event.badgeColor}`}>
                                            {event.badgeText}
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 bg-white">
                                <Link href={event.href} className="block w-full mb-4 text-right">
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 line-clamp-2 group-hover:text-[#52B788] transition-colors leading-tight">{event.title}</h3>
                                </Link>

                                <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed text-base font-medium text-right">{event.description}</p>

                                {/* Date/Time/Location/Seats Pills */}
                                <div className="grid grid-cols-2 gap-3 text-sm font-bold text-slate-700 mb-10 mt-auto" dir="rtl">
                                    <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                                        <Calendar className="w-5 h-5 text-[#52B788]" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                                        <Clock className="w-5 h-5 text-[#52B788]" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                                        <MapPin className="w-5 h-5 text-[#52B788]" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                                        <Users className="w-5 h-5 text-[#52B788]" />
                                        <span>{event.seats}</span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="w-full">
                                    <Button
                                        asChild
                                        className={`w-full h-14 rounded-2xl text-lg font-bold transition-all hover:-translate-y-1 ${event.isActive ? 'bg-[#52B788] hover:bg-[#40916C] text-white shadow-xl shadow-[#52B788]/25' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm'}`}
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
