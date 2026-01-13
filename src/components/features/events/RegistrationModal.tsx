"use client";

import { useState } from "react";
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

import { User, Phone, Mail, Loader2, Send } from "lucide-react";

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbyBVlsRUqhSQ47YCdPd6otNGlx6miOOmHIpWT1R3mOoAk7iSxHfaVdkxUhxBYE0kH7j/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log("Registration Data:", formData);
            alert(`تم التسجيل بنجاح! هنتواصل معاك قريباً لتأكيد الحجز.`);

            setIsLoading(false);
            onClose();
            setFormData({ name: "", whatsapp: "", email: "" });
        } catch (error) {
            console.error("Error submitting form", error);
            alert("حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.");
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md text-right p-0 overflow-hidden border-none shadow-2xl" dir="rtl">
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
            </DialogContent>
        </Dialog>
    );
}
