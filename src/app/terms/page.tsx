import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 md:px-8 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 group">
                        <ArrowLeft className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform" />
                        العودة للرئيسية
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">الشروط والأحكام</h1>
                    <p className="text-slate-400 text-lg">آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-10 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. قبول الشروط</h2>
                        <p className="text-slate-300 leading-relaxed">
                            مرحباً بك في "يُسر" (Yusr). من خلال الوصول إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. وصف الخدمات</h2>
                        <p className="text-slate-300 leading-relaxed">
                            يوفر "يُسر" خدمات تصميم تجربة المستخدم (UI/UX)، استشارات التصميم، التدريب (Bootcamps)، وتطوير الواجهات. تخضع جميع الخدمات لهذه الشروط بالإضافة إلى أي اتفاقيات خاصة يتم توقيعها لكل مشروع.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. الملكية الفكرية</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 marker:text-primary">
                            <li><strong>محتوى الموقع:</strong> جميع المواد الموجودة على هذا الموقع (النصوص، الصور، الشعارات، الأكواد) هي ملك لـ "يُسر" ومحمية بموجب قوانين الملكية الفكرية.</li>
                            <li><strong>مشاريع العملاء:</strong> تنتقل ملكية التصاميم النهائية للعميل بعد سداد كامل المستحقات المتفق عليها. يحتفظ "يُسر" بحق عرض الأعمال في معرض الأعمال (Portfolio) ما لم يتم الاتفاق على غير ذلك.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. التزامات المستخدم</h2>
                        <p className="text-slate-300 mb-2">عند استخدامك لموقعنا، فإنك تتعهد بـ:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 marker:text-primary">
                            <li>عدم استخدام الموقع لأي غرض غير قانوني أو محظور.</li>
                            <li>عدم محاولة اختراق أمن الموقع أو تعطيل خدماته.</li>
                            <li>تقديم معلومات دقيقة وصحيحة عند التواصل معنا أو التسجيل.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. الدفع والاسترجاع</h2>
                        <p className="text-slate-300 leading-relaxed">
                            يتم الاتفاق على شروط الدفع لكل مشروع أو دورة تدريبية بشكل منفصل. بشكل عام، المبالغ المدفوعة للخدمات الاستشارية والمشاريع المخصصة غير قابلة للاسترداد بعد بدء العمل، إلا في الحالات التي ينص عليها العقد المبرم.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. حدود المسؤولية</h2>
                        <p className="text-slate-300 leading-relaxed">
                            نسعى لتقديم محتوى دقيق وخدمات عالية الجودة، ولكننا لا نضمن خلو الموقع من الأخطاء. لا يتحمل "يُسر" المسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنجم عن استخدام الموقع أو تعذر استخدامه.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. التعديلات</h2>
                        <p className="text-slate-300 leading-relaxed">
                            نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد إجراء التغييرات قبولاً لها.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. القانون واجب التطبيق</h2>
                        <p className="text-slate-300 leading-relaxed">
                            تخضع هذه الشروط وتفسر وفقاً لقوانين جمهورية مصر العربية.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-slate-800">
                        <h2 className="text-2xl font-bold text-white mb-4">اتصل بنا</h2>
                        <p className="text-slate-300 mb-4">
                            لأي استفسارات بخصوص الشروط والأحكام، يرجى التواصل معنا:
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
