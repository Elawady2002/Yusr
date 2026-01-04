
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Instructor } from "@/components/bootcamp/Instructor";

export default function AboutPage() {
    return (
        <div className="container-responsive mx-auto py-20 min-h-screen">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">أكثر من مجرد منصة تعليمية</h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    انطلقت "يُسر" من إيمان عميق بأن التصميم ليس مجرد "شكل جميل"، بل هو أسلوب حياة وطريقة تفكير لحل المشكلات.
                    نحن هنا لنبسط لك المفاهيم المعقدة، ونساعدك على إتقان تصميم تجربة المستخدم (UX) بعيداً عن الحشو النظري.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                        src="/Yusr/assets/Post_Cover.png"
                        alt="بيئة تعليمية تفاعلية"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">لماذا نحن هنا؟</h2>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        في عالم رقمي مزدحم، نؤمن بقوة <strong>"السهولة الممتنعة"</strong>.
                        مهمتنا هي تمليكك الأدوات والمنهجيات التي تجعل منك مصمماً واثقاً، قادراً على اتخاذ قرارات مبنية على البحث والبيانات، وليس مجرد منفذ للتعليمات.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-foreground/80 marker:text-primary">
                        <li>نركز على القيمة الحقيقية وليس المظاهر.</li>
                        <li>نقدر وقتك، لذلك محتوانا مكثف ومباشر.</li>
                        <li>نبني مجتمعاً عربياً قوياً للمصممين المحترفين.</li>
                    </ul>
                </div>
            </div>

            <Instructor />

            <div className="bg-primary/5 rounded-3xl p-12 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-6">كن جزءاً من القصة</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    سواء كنت تبحث عن وظيفتك الأولى، أو تسعى لتطوير مهاراتك الحالية، مكانك محفوظ في مجتمع يُسر.
                    انضم إلينا الآن لنصنع مستقبلاً أفضل للتصميم في العالم العربي.
                </p>
                <Button size="lg" className="font-bold gap-2" asChild>
                    <Link href="https://whatsapp.com/channel/0029VajBHqo8qIzyWzK6S938" target="_blank">انضم لمجتمعنا مجاناً</Link>
                </Button>
            </div>
        </div>
    );
}
