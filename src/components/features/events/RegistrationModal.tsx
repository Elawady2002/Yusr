"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

import { User, Phone, Mail, Loader2, Send, IdCard, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        nationalId: "",
        whatsapp: "",
        email: "",
    });

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            // Short timeout to allow fade-out animation before resetting
            const timer = setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: "", nationalId: "", whatsapp: "", email: "" });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzHjxIgejrdk5XQqbEcOJ7uaF1iYrPEFP_lmwxe0cFgLEpyI00CfoR_XfWVPhFaczFf/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log("Registration Data:", formData);
            // Show success view instead of alert
            setIsLoading(false);
            setIsSuccess(true);

        } catch (error) {
            console.error("Error submitting form", error);
            alert("حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.");
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[calc(100%-32px)] sm:w-full sm:max-w-md text-right p-0 overflow-hidden border-none shadow-2xl [&>button]:left-4 [&>button]:right-auto rounded-[32px] sm:rounded-[32px]" dir="rtl">
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center p-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-foreground">تم التسجيل بنجاح!</h2>
                            <p className="text-muted-foreground">
                                عشان تعرف مكان الإيفنت وتتابع التفاصيل، ضروري تنضم لجروب الواتساب الخاص بالحدث.
                            </p>
                        </div>

                        <div className="w-full space-y-3">
                            <Button
                                className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                                onClick={() => window.open('https://chat.whatsapp.com/GSjsuSTktWB0Pu94CLEYK9', '_blank')}
                            >
                                <Image
                                    src="/assets/what's.svg"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                انضم لجروب الإيفنت
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                                onClick={onClose}
                            >
                                إغلاق
                            </Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="bg-primary/5 p-6 border-b border-primary/10">
                            <DialogHeader className="text-center space-y-2">
                                <DialogTitle className="text-2xl font-bold text-primary text-center">سجّل مكانك معانا</DialogTitle>
                                <DialogDescription className="text-base text-center">
                                    فرصتك تبدأ رحلة تعلم حقيقية. املأ بياناتك وهنتواصل معاك.
                                </DialogDescription>
                            </DialogHeader>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium">الاسم بالكامل</Label>
                                <div className="relative">
                                    <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="name"
                                        placeholder="اكتب اسمك هنا"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="nationalId" className="text-sm font-medium">الرقم القومي</Label>
                                <div className="relative">
                                    <IdCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="nationalId"
                                        placeholder="اكتب رقمك القومي (14 رقم)"
                                        value={formData.nationalId}
                                        onChange={handleChange}
                                        required
                                        maxLength={14}
                                        minLength={14}
                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="whatsapp" className="text-sm font-medium">رقم الواتساب</Label>
                                <div className="relative">
                                    <Phone className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="whatsapp"
                                        type="tel"
                                        placeholder="01xxxxxxxxx"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        required
                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</Label>
                                <div className="relative">
                                    <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="example@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-bold mt-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        جاري التسجيل...
                                    </>
                                ) : (
                                    <>
                                        تأكيد التسجيل
                                        <Send className="mr-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </>
                )}

            </DialogContent >
        </Dialog >
    );
}
