import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-[#0f172a] text-white pt-16 pb-8">
            <div className="container-responsive">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.svg"
                                alt="Yusr Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-base text-gray-400 leading-relaxed max-w-sm">
                            منهجية متميزة في تبسيط تجربة المستخدم وتصميم الواجهات، بقيادة أمير يسري.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-gray-100">روابط سريعة</h3>
                        <ul className="space-y-4 text-base text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">الرئيسية</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2">من نحن</Link></li>

                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-gray-100">تواصل معنا</h3>
                        <ul className="space-y-4 text-base text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>الزقازيق، الشرقية</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:withamiruiux@gmail.com" className="hover:text-primary transition-colors dir-ltr">withamiruiux@gmail.com</a>
                            </li>

                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-gray-100">تابعنا</h3>
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://www.linkedin.com/company/%D9%8A%D9%8F%D8%B3%D8%B1/"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all border border-white/10 hover:border-primary/50"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/share/1C3KW4SG34/"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all border border-white/10 hover:border-primary/50"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} يُسر (Yusr). جميع الحقوق محفوظة.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-300 transition-colors">سياسة الخصوصية</Link>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">الشروط والأحكام</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
