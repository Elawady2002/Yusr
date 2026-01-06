import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pingAR = localFont({
  src: [
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-Hairline copy.otf", weight: "100" },
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-ExtraLight.otf", weight: "200" },
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-Light 10.58.30 PM 10.58.30 PM 10.58.30 PM 10.58.30 PM.otf", weight: "300" },
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-Regular.otf", weight: "400" },
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-Bold 10.58.30 PM 10.58.30 PM 10.58.30 PM 10.58.30 PM.otf", weight: "700" },
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-Heavy.otf", weight: "800" },
    { path: "../../public/assets/fonts/PingAR+LT/PingAR+LT-Black.otf", weight: "900" },
  ],
  variable: "--font-pingar",
});

export const metadata: Metadata = {
  title: {
    default: "يُسر – Yusr Bootcamp Academy | من اليُسر تبدأ التجربة",
    template: "%s | يُسر"
  },
  description: "أكاديمية يُسر تقدّم Bootcamps متخصصة في UI/UX لتعلّم تجربة المستخدم من الفهم للتطبيق العملي.",
  keywords: [
    "UX Bootcamp",
    "UI UX Academy",
    "تعلم UX بالعربي",
    "UX Design Bootcamp",
    "أكاديمية UX",
    "تعلم تجربة المستخدم",
    "UI UX للمبتدئين",
    "تأهيل UX لسوق العمل",
    "يُسر",
    "Yusr"
  ],
  openGraph: {
    title: "يُسر – Yusr Bootcamp Academy | بدل ما تتعلم كتير… اتعلّم يُسر",
    description: "أكاديمية يُسر تقدّم Bootcamps متخصصة في UI/UX لتعلّم تجربة المستخدم من الفهم للتطبيق العملي.",
    url: "https://yusr.design",
    siteName: "يُسر | Yusr",
    locale: "ar_EG",
    type: "website",
  },
};

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

// ... existing imports

import { RandomCursor } from "@/components/ui/RandomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${pingAR.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <RandomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
