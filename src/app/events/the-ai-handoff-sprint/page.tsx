"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Tag } from "lucide-react";
import Link from "next/link";

export default function AIHandoffSprintPage() {

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
                            سبرينت أونلاين
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight md:leading-snug">
                            The AI Handoff Sprint
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
                            تعلم كيفية تسليم تصاميمك بفعالية واحترافية باستخدام أدوات الذكاء الاصطناعي.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground border-y border-border/50 py-6 w-full max-w-4xl">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>السبت والاحد 7 و 8 مارس</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                <span>العدد 80 مقعد</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>أونلاين (Google Meet)</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-primary" />
                                <span>مجاني</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                            <Button
                                size="lg"
                                disabled
                                className="text-lg px-10 h-14 rounded-full font-bold bg-slate-300 text-slate-500 cursor-not-allowed shadow-none border-0 hover:bg-slate-300"
                            >
                                اكتمل العدد 🔒
                            </Button>
                        </div>

                        <div className="pt-8">
                            <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                                العودة إلى الفعاليات
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50" />
            </section>
        </main>
    );
}
