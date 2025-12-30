import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const previousMeetups = [
    {
        id: 101,
        title: "مبادئ التصميم النفسي",
        date: "10 ديسمبر 2025",
        location: "Online",
        description: "كيف نستخدم علم النفس لتحسين تفاعل المستخدم؟",
    },
    {
        id: 102,
        title: "مستقبل الـ No-Code Tools",
        date: "5 نوفمبر 2025",
        location: "Greek Campus, Cairo",
        description: "هل تستبدل أدوات الـ No-Code المبرمجين؟",
    },
];

const upcomingMeetups = [
    {
        id: 1,
        title: "مستقبل تصميم الواجهات في عصر الذكاء الاصطناعي",
        date: "15 يناير 2026",
        location: "Online",
        description: "نقاش مفتوح حول تأثير أدوات AI على وظيفة مصمم الواجهات.",
    },
    {
        id: 2,
        title: "سايكولوجية الألوان في تطبيقات التكنولوجيا المالية",
        date: "2 فبراير 2026",
        location: "القاهرة، مصر",
        description: "كيف تؤثر الألوان على قرارات المستخدم المالية؟",
    },
];

export default function MeetupsPage() {
    return (
        <div className="flex flex-col min-h-screen py-12 container">
            <h1 className="text-4xl font-bold mb-8 text-center">لقاءات مجتمع يُسر</h1>

            {/* Upcoming Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center text-primary">اللقاءات القادمة</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingMeetups.map((meetup) => (
                        <Card key={meetup.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>{meetup.title}</CardTitle>
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
                            <CardContent>
                                <CardDescription>{meetup.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" asChild>
                                    <Link href={`#`}>احجز مقعدك</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Previous Section */}
            <div>
                <h2 className="text-2xl font-bold mb-6 text-center text-muted-foreground">أرشيف اللقاءات</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 opacity-80">
                    {previousMeetups.map((meetup) => (
                        <Card key={meetup.id}>
                            <CardHeader>
                                <CardTitle>{meetup.title}</CardTitle>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{meetup.date}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{meetup.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full" disabled>
                                    انتهى اللقاء
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
