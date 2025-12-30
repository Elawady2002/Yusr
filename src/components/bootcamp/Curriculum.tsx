"use client";

import { CheckCircle2 } from "lucide-react";

const modules = [
    {
        title: "أسبوع 1: أساسيات البحث (UX Research)",
        description: "فهم احتياجات المستخدم، المقابلات الشخصية، وتحليل المنافسين.",
    },
    {
        title: "أسبوع 2: هندسة المعلومات (IA)",
        description: "بناء هيكل الموقع، خرائط الموقع (Sitemaps)، وتدفق المستخدم (User Flows).",
    },
    {
        title: "أسبوع 3: التصميم المبدئي (Wireframing)",
        description: "تحويل الأفكار إلى مخططات سلكية تفاعلية واختبارها سريعاً.",
    },
    {
        title: "أسبوع 4: تصميم الواجهات (UI Design)",
        description: "نظريات الألوان، الخطوط، التباين، وبناء نظام تصميم متكامل (Design System).",
    },
    {
        title: "أسبوع 5: اختبار القابلية للاستخدام",
        description: "كيفية التحقق من سهولة الاستخدام وتحسين المنتج بناءً على الملاحظات.",
    },
];

export function Curriculum() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">رحلة التعلم</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        منهج عملي مكثف يأخذك من الصفر إلى مستوى محترف، مصمم ليحاكي بيئة العمل الحقيقية.
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto relative before:absolute before:inset-0 before:mr-[19px] before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                    {modules.map((module, index) => (
                        <div key={index} className="relative flex items-start gap-6 group">
                            <div className="absolute right-0 flex items-center justify-center p-1 bg-background rounded-full border border-primary/20 shadow-sm z-10 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-8 h-8 text-primary fill-primary/10" />
                            </div>
                            <div className="pr-16">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{module.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
