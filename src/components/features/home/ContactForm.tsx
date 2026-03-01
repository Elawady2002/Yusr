"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("تم إرسال رسالتك بنجاح! سنرد عليك قريباً.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
            }
        } catch (error) {
            console.error(error);
            alert("حدث خطأ غير متوقع.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container-responsive">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">تواصل معنا</h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                        لديك استفسار عن البوتكامب أو الخدمات الاستشارية؟ اترك رسالتك وسنرد عليك قريباً.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-sm border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">الاسم</Label>
                            <Input
                                id="name"
                                placeholder="الاسم الكامل"
                                className="h-11 md:h-12"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">البريد الإلكتروني</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                                className="h-11 md:h-12"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">الموضوع</Label>
                        <Input
                            id="subject"
                            placeholder="استفسار بخصوص..."
                            className="h-11 md:h-12"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">الرسالة</Label>
                        <Textarea
                            id="message"
                            placeholder="اكتب رسالتك هنا..."
                            className="min-h-[120px] md:min-h-[150px]"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-bold h-12 md:h-14 text-base md:text-lg" disabled={isLoading}>
                        {isLoading ? "جاري الإرسال..." : "إرسال الرسالة"}
                    </Button>
                </form>
            </div>
        </section>
    );
}
