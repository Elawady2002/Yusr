
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container py-20 min-h-screen">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-extrabold mb-6">قصة يُسر</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    انطلقت "يُسر" من قناعة راسخة بأن التعقيد هو عدو المستخدم الأول. نسعى لنشر ثقافة التصميم المبسط
                    الذي يركز على الإنسان واحتياجاته الحقيقية، بعيداً عن البهرجة البصرية الزائدة.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                    {/* Placeholder for About Image */}
                    <div className="flex items-center justify-center h-full text-muted-foreground font-bold">
                        [صورة فريق العمل / ورشة عمل]
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">لماذا يُسر؟</h2>
                    <p className="text-lg text-muted-foreground">
                        في عالم يزداد تعقيداً كل يوم، نؤمن بقوة <strong>"السهولة الممتنعة"</strong>.
                        تصميماتنا ودوراتنا التدريبية تهدف إلى تمليك المصممين الأدوات التي تمكنهم من اتخاذ قرارات تصميمية واعية
                        مبنية على البحث والبيانات، وليس فقط الذوق الشخصي.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80 marker:text-primary">
                        <li>التركيز على القيمة الحقيقية للمستخدم.</li>
                        <li>احترام وقت المستخدم وجهده الذهني.</li>
                        <li>نشر المعرفة بلغة عربية مبسطة وعميقة.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-primary/5 rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">انضم إلى مجتمعنا</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    سواء كنت مصمماً مبتدئاً أو خبيراً، هناك دائماً مكان لك في مجتمع يُسر. شاركنا في اللقاءات القادمة أو انضم للبوتكامب لتصقل مهاراتك.
                </p>
                <Button size="lg" className="font-bold gap-2" asChild>
                    <Link href="/contact">تواصل معنا</Link>
                </Button>
            </div>
        </div>
    );
}
