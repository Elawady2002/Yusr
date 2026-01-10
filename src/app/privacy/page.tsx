import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 md:px-8 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 group">
                        <ArrowLeft className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform" />
                        العودة للرئيسية
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">سياسة الخصوصية</h1>
                    <p className="text-slate-400 text-lg">آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-10 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. مقدمة</h2>
                        <p className="text-slate-300 leading-relaxed">
                            نحن في "يُسر" (Yusr)، بقيادة أمير يسري، نلتزم بحماية خصوصيتك وضمان أمان بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا، استخدامنا، وحمايتنا لمعلوماتك عند زيارتك لموقعنا الإلكتروني أو الاستفادة من خدماتنا.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. المعلومات التي نجمعها</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 marker:text-primary">
                            <li><strong>المعلومات الشخصية:</strong> مثل الاسم، عنوان البريد الإلكتروني، ورقم الهاتف عند التواصل معنا أو طلب خدمة.</li>
                            <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية تفاعلك مع موقعنا، بما في ذلك الصفحات التي تزورها والوقت الذي تقضيه.</li>
                            <li><strong>معلومات الجهاز:</strong> نوع المتصفح، عنوان IP، ونظام التشغيل.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. كيف نستخدم معلوماتك</h2>
                        <p className="text-slate-300 mb-2">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 marker:text-primary">
                            <li>تقديم خدماتنا وتحسين تجربتك كمستخدم.</li>
                            <li>الرد على استفساراتك وتقديم الدعم الفني.</li>
                            <li>إرسال تحديثات حول خدماتنا أو عروض خاصة (يمكنك إلغاء الاشتراك في أي وقت).</li>
                            <li>تحليل أداء الموقع وتحسين وظائفه.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. ملفات تعريف الارتباط (Cookies)</h2>
                        <p className="text-slate-300 leading-relaxed">
                            نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة التصفح وتخصيص المحتوى. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. مشاركة البيانات</h2>
                        <p className="text-slate-300 leading-relaxed">
                            نحن لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط مع:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 marker:text-primary mt-2">
                            <li>مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا (مثل خدمات الاستضافة).</li>
                            <li>عندما يكون ذلك مطلوباً بموجب القانون.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. أمن البيانات</h2>
                        <p className="text-slate-300 leading-relaxed">
                            نحن نتخذ تدابير أمنية تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح. ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100%.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. حقوقك</h2>
                        <p className="text-slate-300 leading-relaxed">
                            لديك الحق في طلب الوصول إلى بياناتك الشخصية التي نحتفظ بها، أو تصحيحها، أو حذفها. للتواصل بخصوص حقوقك، يرجى مراسلتنا.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-slate-800">
                        <h2 className="text-2xl font-bold text-white mb-4">تواصل معنا</h2>
                        <p className="text-slate-300 mb-4">
                            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:
                        </p>
                        <a href="mailto:withamiruiux@gmail.com" className="text-primary hover:text-primary/80 transition-colors text-lg font-medium dir-ltr inline-block">
                            withamiruiux@gmail.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
