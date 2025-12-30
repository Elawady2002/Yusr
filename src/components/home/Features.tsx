"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";

const features = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: "تعلم عملي عميق",
        description: "نبتعد عن التنظير الممل ونركز على التطبيق العملي في كل خطوة.",
        bg: "bg-primary/5",
    },
    {
        icon: <Users className="w-8 h-8 text-secondary" />,
        title: "إرشاد مهني (Mentorship)",
        description: "متابعة دورية مع أمير يسري لضمان تطورك المهني وتوجيهك الصحيح.",
        bg: "bg-secondary/5",
    },
    {
        icon: <Award className="w-8 h-8 text-accent" />,
        title: "شهادة معتمدة",
        description: "احصل على شهادة إتمام تعزز من سيرتك الذاتية وتفتح لك أبواب التوظيف.",
        bg: "bg-accent/5",
    },
];

export function Features() {
    return (
        <section className="py-20 bg-background">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">لماذا تختار بوتكامب يُسر؟</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        صممنا هذه التجربة التعليمية لتكون الجسر الفاصل بين ما أنت عليه الآن وبين طموحك لتكون مصمم محترف.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-none bg-transparent">
                            <CardContent className={`p-8 rounded-3xl ${feature.bg} flex flex-col items-center text-center h-full transition-transform hover:-translate-y-1 duration-300`}>
                                <div className="mb-6 bg-background rounded-full p-4 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
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
