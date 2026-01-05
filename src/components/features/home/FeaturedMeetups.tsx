"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const meetups = [
    {
        id: 1,
        title: "مستقبل تصميم الواجهات في عصر الذكاء الاصطناعي",
        date: "15 يناير 2026",
        location: "Online",
        description: "نقاش مفتوح حول تأثير أدوات AI على وظيفة مصمم الواجهات وكيفية الاستفادة منها.",
    },
    {
        id: 2,
        title: "سايكولوجية الألوان في تطبيقات التكنولوجيا المالية",
        date: "2 فبراير 2026",
        location: "القاهرة، مصر",
        description: "كيف تؤثر الألوان على قرارات المستخدم المالية؟",
    },
    {
        id: 3,
        title: "تبسيط النماذج المعقدة: دراسة حالة",
        date: "20 فبراير 2026",
        location: "الرياض، السعودية",
        description: "ورشة عمل عملية لتحسين تجربة المستخدم في النماذج الطويلة.",
    },
];

export function FeaturedMeetups() {
    return (
        <section className="py-20 bg-background">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            لقاءات مجتمع يُسر
                        </h2>
                        <p className="mt-2 text-muted-foreground text-lg">
                            انضم لنقاشات ملهمة مع نخبة من المصممين والخبراء.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/meetups">عرض كل اللقاءات</Link>
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {meetups.map((meetup) => (
                        <Card key={meetup.id} className="flex flex-col border-border/50 hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle className="leading-snug text-xl">{meetup.title}</CardTitle>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{meetup.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{meetup.location}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription className="text-base text-foreground/80">
                                    {meetup.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" className="w-full font-semibold" asChild>
                                    <Link href={`/meetups/${meetup.id}`}>تفاصيل اللقاء</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
