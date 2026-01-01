"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Instructor() {
    return (
        <section className="py-20 bg-background">
            <div className="container flex flex-col md:flex-row items-center gap-12">
                <div className="relative w-full md:w-1/2 aspect-4/5 max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-muted">
                        <Image
                            src="/Yusr/assets/ai.jpg"
                            alt="أمير يسري"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                    <Badge variant="secondary" className="text-white px-4 py-1 text-sm">المدرب الرئيسي</Badge>
                    <h2 className="text-4xl font-bold tracking-tight">أمير يسري</h2>
                    <h3 className="text-xl text-primary font-medium">مؤسس يُسر & UX Consultant</h3>

                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            يتمتع أمير بخبرة واسعة في مجال تصميم تجربة المستخدم، حيث عمل مع كبرى الشركات لتبسيط منتجاتها الرقمية.
                            يشتهر بمنهجيته الفريدة <strong>"UX in 100 Minutes"</strong> التي تركز على جوهر التصميم بعيداً عن التعقيدات الأكاديمية.
                        </p>
                        <p>
                            درب أمير مئات المصممين وساعدهم على الانتقال من الهواية إلى الاحتراف، مع التركيز على الجانب النفسي والسلوكي للمستخدم.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
