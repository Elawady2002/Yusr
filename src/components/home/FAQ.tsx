"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "هل البوتكامب متاح للمبتدئين؟",
        answer: "نعم، البوتكامب مصمم ليبدأ معك من الصفر تماماً، لا يشترط وجود خبرة سابقة في التصميم، ولكن يفضل أن يكون لديك شغف بالتعلم واهتمام بالتكنولوجيا.",
    },
    {
        question: "ما هي الأدوات التي سنتعلمها؟",
        answer: "سنتعلم استخدام Figma بشكل احترافي، بالإضافة إلى أدوات التفكير التصميمي والبحث مثل FigJam و Miro.",
    },
    {
        question: "هل الشهادة معتمدة دولياً؟",
        answer: "الشهادة معتمدة من يُسر وتثبت إتمامك لعدد ساعات التدريب والمشاريع العملية. نساعدك في بناء ملف أعمال (Portfolio) قوي وهو الأهم للتوظيف عالمياً.",
    },
    {
        question: "هل توجد خطط تقسيط؟",
        answer: "نعم، نوفر خيارات دفع مرنة عبر شركائنا (Valu, Fawry). تواصل معنا لمعرفة التفاصيل.",
    },
];

export function FAQ() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">أسئلة شائعة</h2>
                    <p className="text-muted-foreground">
                        إجابات على أكثر الاستفسارات التي تصلنا من المصممين.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b- border px-6 rounded-2xl bg-card mb-4 data-[state=open]:border-primary shadow-sm">
                            <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
