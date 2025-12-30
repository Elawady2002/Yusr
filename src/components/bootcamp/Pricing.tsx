"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
    return (
        <section className="py-20 bg-background" id="booking">
            <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">اختر باقتك وانضم إلينا</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Standard Ticket */}
                    <Card className="border-border/50 shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-2xl">تذكرة الحضور</CardTitle>
                            <CardDescription>للمصممين المستقلين والمبتدئين</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-4xl font-bold text-primary">
                                10,000 <span className="text-lg font-normal text-muted-foreground">EGP</span>
                            </div>
                            <ul className="space-y-3 text-right text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> حضور كامل أيام البوتكامب</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> الوصول للمواد التعليمية مدى الحياة</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> شهادة إتمام معتمدة</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> وجبات خفيفة ومشروبات</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full font-bold" variant="outline" asChild>
                                <Link href="/confirmation">احجز الآن</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Premium Ticket */}
                    <Card className="border-primary shadow-lg scale-105 relative overflow-hidden bg-primary/5">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            الأكثر طلباً
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">باقة الاحتراف</CardTitle>
                            <CardDescription>شاملة التوجيه والإرشاد المهني</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-4xl font-bold text-foreground">
                                15,000 <span className="text-lg font-normal text-muted-foreground">EGP</span>
                            </div>
                            <ul className="space-y-3 text-right text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> كل مميزات تذكرة الحضور</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <strong>مراجعة Portfolio شخصية</strong> مع أمير يسري</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> جلسة إرشاد مهني (1-on-1 Mentorship)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> أولوية في التوظيف عند الشركاء</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full font-bold bg-primary hover:bg-primary/90 text-white" asChild>
                                <Link href="/confirmation?plan=premium">احجز باقة الاحتراف</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
