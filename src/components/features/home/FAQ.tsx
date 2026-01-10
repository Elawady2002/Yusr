"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "هل بوتكامب يُسر مناسب للمبتدئين؟",
        answer: "أيوه، مناسب جدًا. بوتكامبس يُسر بتبدأ معاك من الصفر، ومش محتاج أي خبرة سابقة في التصميم. كل اللي محتاجه شغف بالتعلّم، واستعداد إنك تطبّق وتفهم مش تحفظ.",
    },
    {
        question: "هل في شهادة بعد البوتكامب؟",
        answer: "آه، بتحصل على شهادة إتمام من أكاديمية يُسر بعد نهاية البوتكامب. الشهادة بتركّز على إنك خلصت تجربة تعليمية تطبيقية، وقدرت تطبّق اللي اتعلمته فعليًا.",
    },
    {
        question: "هل البوتكامب نظري ولا عملي؟",
        answer: "عملي بنسبة كبيرة. كل جزء نظري وراه تطبيق مباشر، وتمارين، ومناقشات، علشان تطلع فاهم مش تايه.",
    },
    {
        question: "البوتكامب مناسب لمين؟",
        answer: (
            <ul className="list-disc list-inside space-y-1">
                <li>لو لسه بتبدأ في UI/UX</li>
                <li>لو حاسس إنك تايه وسط المحتوى</li>
                <li>لو بتتعلم بس مش عارف تطبّق</li>
                <li>لو عايز تبني أساس صح قبل ما تكمل</li>
            </ul>
        ),
    },
];

export function FAQ() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container-responsive">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">أسئلة شائعة</h2>
                    <p className="text-sm md:text-base text-muted-foreground">
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
