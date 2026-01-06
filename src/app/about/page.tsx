import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Target, Eye, CheckCircle2, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "من نحن – يُسر | أكاديمية UI/UX",
    description: "تعرف على أكاديمية يُسر، رؤيتنا، أهدافنا، ولماذا نؤمن إن التعلّم يبدأ من التجربة.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-linear-to-b from-primary/5 via-background to-background overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10" />

                <div className="container-responsive relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Hero Image */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                            <Image
                                src="/Yusr/assets/Post_Cover.png"
                                alt="من اليسر تبدأ التجربة"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="text-start space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                                من نحن – يُسر
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                يُسر هي أكاديمية تعليمية متخصصة في تقديم Bootcamps في مجال UI/UX، هدفها تبسيط التعلّم وتحويله لتجربة إنسانية، واضحة، وقابلة للتطبيق.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why the Name Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container-responsive">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            لماذا اسم يُسر؟
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            اخترنا اسم يُسر لأننا بنؤمن إن التعلّم المفروض يكون مريح، مفهوم، وبلا ضغط. مش سباق ولا مقارنة، لكن رحلة طبيعية كل شخص يمشيها بطريقته.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why We Started Section */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container-responsive">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            لماذا أنشأنا يُسر؟
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            بدأت يُسر بعد ما لاحظنا إن أغلب المتعلمين بيعانوا من نفس المشكلة: محتوى كتير، أدوات أكتر، وفهم أقل. فقررنا نبني تجربة تعليمية تركّز على الترتيب، الفهم، والتطبيق الحقيقي.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="container-responsive relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                        {/* Vision */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <Eye className="w-7 h-7" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold">رؤيتنا</h2>
                            </div>
                            <p className="text-lg leading-relaxed text-primary-foreground/90">
                                بناء جيل من مصممي UX/UI فاهمين مش حافظين، قادرين على اتخاذ قرارات تصميم مبنية على فهم المستخدم.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <Target className="w-7 h-7" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold">مهمتنا</h2>
                            </div>
                            <p className="text-lg leading-relaxed text-primary-foreground/90">
                                تقديم Bootcamps تعليمية متخصصة تساعد المتعلّم على الانتقال من المعرفة النظرية للتطبيق العملي بثقة.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px] mix-blend-overlay pointer-events-none" />
            </section>

            {/* Goals Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-responsive">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
                            أهدافنا
                        </h2>
                        <div className="space-y-6">
                            {[
                                "تبسيط مفاهيم UX المعقدة",
                                "تأهيل المصممين لسوق العمل",
                                "بناء مجتمع تعليمي داعم"
                            ].map((goal, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-6 bg-muted/50 rounded-2xl hover:bg-muted transition-colors"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-lg font-medium">{goal}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Community CTA */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container-responsive">
                    <div className="bg-primary/5 rounded-3xl p-10 md:p-12 flex flex-col items-center text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">كن جزءًا من القصة</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            سواء لسه بتبدأ، أو تايه في نص الطريق، يُسر مكانك. انضم لمجتمع بيتعلم ويفهم وبيكبر مع بعضه.
                        </p>
                        <Button size="lg" className="font-bold gap-3 text-lg py-6 px-8 h-14 rounded-full" asChild>
                            <Link href="https://whatsapp.com/channel/0029VajBHqo8qIzyWzK6S938" target="_blank">
                                <Users className="w-5 h-5" />
                                انضم للمجتمع
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
