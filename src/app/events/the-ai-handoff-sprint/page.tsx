"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function AIHandoffSprintPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        // Create an application/x-www-form-urlencoded string to avoid CORS JSON preflight
        const params = new URLSearchParams();
        params.append("name", formData.get("name") as string);
        params.append("email", formData.get("email") as string);
        params.append("phone", formData.get("phone") as string);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzoP8R1eqa6fe95yGPej5bhuFZEr6n5XOxABTdFy_8P1MynHxu7z9Q7Vkya_YyexrBU/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params.toString(),
            });

            // With no-cors, the response is opaque (response.ok is false).
            // Always assume success unless a network error is thrown.
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert("حدث خطأ في الاتصال بالانترنت. يرجى المحاولة لاحقاً.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="text-lg px-8 h-14 rounded-full shadow-lg transition-all font-bold shadow-primary/20 hover:shadow-primary/40 group"
                                    >
                                        سجل اهتمامك الآن
                                        <ArrowRight className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl rounded-2xl">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-extrabold text-slate-800 text-center">التسجيل في المعسكر</DialogTitle>
                                        <DialogDescription className="text-center text-slate-500 text-base mt-2">
                                            The AI Handoff Sprint
                                        </DialogDescription>
                                    </DialogHeader>

                                    {isSuccess ? (
                                        <div className="py-10 text-center flex flex-col items-center gap-5">
                                            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-4xl mb-2 shadow-inner border border-emerald-100">
                                                ✓
                                            </div>
                                            <h3 className="text-2xl font-extrabold text-slate-800">تم تسجيل بياناتك بنجاح!</h3>
                                            <p className="text-slate-500 text-base font-medium leading-relaxed max-w-sm">
                                                شكراً لاهتمامك بمعسكر The AI Handoff Sprint. يرجى الانضمام لمجتمع الواتساب لمتابعة كافة التحديثات وتأكيد الحجز.
                                            </p>
                                            <Button
                                                asChild
                                                className="w-full h-14 rounded-xl text-base font-bold bg-[#25D366] hover:bg-[#128C7E] text-white mt-4 shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
                                            >
                                                <a href="https://chat.whatsapp.com/CwUVkaUPN5CG7chImE2WD0" target="_blank" rel="noopener noreferrer">
                                                    انضم لمجتمع الواتساب الآن
                                                </a>
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                                            <div className="space-y-2.5 text-right">
                                                <label htmlFor="name" className="text-sm font-bold text-slate-700">الاسم بالكامل</label>
                                                <Input id="name" name="name" required placeholder="أحمد محمد" className="text-right h-14 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-colors text-base" />
                                            </div>
                                            <div className="space-y-2.5 text-right">
                                                <label htmlFor="email" className="text-sm font-bold text-slate-700">البريد الإلكتروني</label>
                                                <Input id="email" name="email" type="email" required placeholder="example@email.com" className="text-right h-14 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-colors text-base" dir="ltr" />
                                            </div>
                                            <div className="space-y-2.5 text-right">
                                                <label htmlFor="phone" className="text-sm font-bold text-slate-700">رقم الواتساب</label>
                                                <Input id="phone" name="phone" type="tel" required placeholder="010XXXXXXXX" className="text-right h-14 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-colors text-base" dir="ltr" />
                                            </div>
                                            <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-xl text-lg font-bold bg-[#52B788] hover:bg-[#40916C] mt-4 shadow-lg shadow-[#52B788]/20 transition-all hover:-translate-y-0.5">
                                                {isSubmitting ? "جاري الإرسال..." : "أرسل البيانات"}
                                            </Button>
                                        </form>
                                    )}
                                </DialogContent>
                            </Dialog>
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
