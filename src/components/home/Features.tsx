"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "تطبيق عملي 100%",
        description: "لا نضيع وقتك بالنظريات المعقدة. نركز على التطبيق الفعلي على مشاريع حقيقية تحاكي تحديات سوق العمل.",
    },
    {
        icon: Users,
        title: "توجيه شخصي (Mentorship)",
        description: "أنت لست وحدك. احصل على متابعة مستمرة وتوجيه مباشر لتصحيح مسارك وتطوير نقاط قوتك.",
    },
    {
        icon: Award,
        title: "تأهيل لسوق العمل",
        description: "لا نمنحك مجرد شهادة، بل نساعدك في بناء ملف أعمال (Portfolio) قوي يجعلك المرشح الأفضل للوظائف.",
    },
];

export function Features() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container-responsive">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4">لماذا تبدأ رحلتك مع يُسر؟</h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        صممنا هذه التجربة التعليمية لتختصر عليك سنوات من المحاولات، وتضعك مباشرة على الطريق الصحيح لتكون مصمم محترف.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="group border-none shadow-none bg-transparent">
                            <CardContent className="p-6 md:p-8 rounded-[2rem] bg-gray-50/80 hover:bg-white border-2 border-transparent hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-center text-center h-full transition-all duration-300">
                                <div className="mb-5 md:mb-6 bg-white p-4 md:p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{feature.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
