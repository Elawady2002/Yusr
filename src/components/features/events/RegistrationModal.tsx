"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { User, Phone, Mail, Loader2, Send, IdCard, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const formSchema = z.object({
    name: z
        .string()
        .min(2, "الاسم قصير جدا")
        .regex(/^[\u0600-\u06FF\s]+$/, "الاسم يجب أن يكون باللغة العربية فقط"),
    nationalId: z
        .string()
        .length(14, "الرقم القومي يجب أن يكون 14 رقم"),
    whatsapp: z
        .string()
        .min(10, "رقم الواتساب غير صحيح")
        .max(15, "رقم الواتساب غير صحيح"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
});

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            nationalId: "",
            whatsapp: "",
            email: "",
        },
    });

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            // Short timeout to allow fade-out animation before resetting
            const timer = setTimeout(() => {
                setIsSuccess(false);
                form.reset();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzHjxIgejrdk5XQqbEcOJ7uaF1iYrPEFP_lmwxe0cFgLEpyI00CfoR_XfWVPhFaczFf/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            console.log("Registration Data:", values);
            // Show success view instead of alert
            setIsLoading(false);
            setIsSuccess(true);

        } catch (error) {
            console.error("Error submitting form", error);
            alert("حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.");
            setIsLoading(false);
        }
    };

    const isRegistrationClosed = false;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[calc(100%-32px)] sm:w-full sm:max-w-md text-right p-0 overflow-hidden border-none shadow-2xl [&>button]:left-4 [&>button]:right-auto rounded-[32px] sm:rounded-[32px]" dir="rtl">
                {isRegistrationClosed ? (
                    <div className="flex flex-col items-center justify-center p-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-2">
                            <XCircle className="w-10 h-10 text-red-600" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-foreground">للأسف الحجز اكتمل!</h2>
                            <p className="text-muted-foreground text-lg">
                                بنعتذر جداً، العدد المطلوب اكتمل.
                                <br />
                                تابعنا عشان تلحق تحجز في الإيفنتات الجاية.
                            </p>
                        </div>

                        <div className="w-full pt-4">
                            <Button
                                variant="outline"
                                className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors h-12 text-lg"
                                onClick={onClose}
                            >
                                إغلاق
                            </Button>
                        </div>
                    </div>
                ) : isSuccess ? (
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

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2 text-right">
                                            <FormLabel className="text-sm font-medium">الاسم بالكامل (باللغة العربية)</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input
                                                        placeholder="اكتب اسمك رباعي باللغة العربية"
                                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="nationalId"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2 text-right">
                                            <FormLabel className="text-sm font-medium">الرقم القومي</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <IdCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input
                                                        placeholder="اكتب رقمك القومي (14 رقم)"
                                                        maxLength={14}
                                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="whatsapp"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2 text-right">
                                            <FormLabel className="text-sm font-medium">رقم الواتساب</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Phone className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input
                                                        type="tel"
                                                        placeholder="01xxxxxxxxx"
                                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2 text-right">
                                            <FormLabel className="text-sm font-medium">البريد الإلكتروني</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input
                                                        type="email"
                                                        placeholder="example@gmail.com"
                                                        className="pr-10 h-11 bg-muted/30 focus:bg-background transition-colors"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

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
                        </Form>
                    </>
                )}

            </DialogContent >
        </Dialog >
    );
}

