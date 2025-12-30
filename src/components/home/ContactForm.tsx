"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
                    <p className="text-muted-foreground">
                        لديك استفسار عن البوتكامب أو الخدمات الاستشارية؟ اترك رسالتك وسنرد عليك قريباً.
                    </p>
                </div>

                <form className="space-y-6 bg-card p-8 rounded-xl shadow-sm border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">الاسم</Label>
                            <Input id="name" placeholder="الاسم الكامل" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">البريد الإلكتروني</Label>
                            <Input id="email" type="email" placeholder="example@gmail.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">الموضوع</Label>
                        <Input id="subject" placeholder="استفسار بخصوص..." />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">الرسالة</Label>
                        <Textarea
                            id="message"
                            placeholder="اكتب رسالتك هنا..."
                            className="min-h-[120px]"
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-bold">
                        إرسال الرسالة
                    </Button>
                </form>
            </div>
        </section>
    );
}
