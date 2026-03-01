
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
            <div className="mb-8 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
            </div>

            <h1 className="text-4xl font-extrabold mb-4 text-foreground">تم تأكيد الحجز بنجاح!</h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-8">
                شكراً لانضمامك إلينا في رحلة "يُسر". تم استلام طلبك وسيتم إرسال تفاصيل الدليل التدريبي والجدول الزمني إلى بريدك الإلكتروني قريباً.
            </p>

            <div className="bg-card border p-6 rounded-xl shadow-sm w-full max-w-md text-right space-y-4 mb-8">
                <h3 className="font-bold border-b pb-2">ملخص الطلب</h3>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">رقم الطلب:</span>
                    <span className="font-mono">#YUSR-8821</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">الباقة:</span>
                    <span>باقة البوتكامب (الاحتراف)</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">التاريخ:</span>
                    <span>{new Date().toLocaleDateString('ar-EG')}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <Button size="lg" className="gap-2 font-bold" asChild>
                    <Link href="/">
                        العودة للرئيسية
                    </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                    <Download className="w-4 h-4" />
                    تحميل الإيصال
                </Button>
            </div>
        </div>
    );
}
