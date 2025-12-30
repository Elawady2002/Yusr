import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t bg-[#0f172a] text-white">
            <div className="container max-w-6xl mx-auto py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                            <Image
                                src="/logo.svg"
                                alt="Yusr Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                            منهجية متميزة في تبسيط تجربة المستخدم وتصميم الواجهات، بقيادة أمير يسري.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-bold text-gray-200">روابط سريعة</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/bootcamp" className="hover:text-primary transition-colors">البوتكامب</Link></li>
                            <li><Link href="/meetups" className="hover:text-primary transition-colors">اللقاءات</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">من نحن</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-bold text-gray-200">تواصل معنا</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>القاهرة، مصر</li>
                            <li>hello@yusr.com</li>
                            <li dir="ltr">+20 100 000 0000</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-bold text-gray-200">تابعنا</h3>
                        <div className="flex items-center gap-4 text-gray-400">
                            {/* Social Placeholders */}
                            <Link href="#" className="hover:text-primary transition-colors">Behance</Link>
                            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center text-sm text-gray-500 md:flex-row md:text-right">
                    <p>© {new Date().getFullYear()} يُسر (Yusr). جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}
