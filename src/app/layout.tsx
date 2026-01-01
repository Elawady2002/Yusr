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
    default: "Yusr | يُسر - تعلم تصميم تجربة المستخدم (UX/UI)",
    template: "%s | يُسر"
  },
  description: "انضم إلى أقوى مجتمع لتعلم تصميم تجربة المستخدم (UX) وواجهات المستخدم (UI) في العالم العربي. منهجية عملية، وتوجيه مهني، ومشاريع حقيقية.",
  keywords: ["UX Design", "UI Design", "User Experience", "تجربة المستخدم", "تصميم واجهات", "بوتكامب", "تعليم تصميم", "يُسر", "Yusr"],
  openGraph: {
    title: "Yusr | يُسر - احترف تصميم تجربة المستخدم",
    description: "رحلتك لتصبح مصمم تجربة مستخدم عالمي تبدأ هنا. تعلم بمنهجية التبسيط.",
    url: "https://yusr.design", // Placeholder URL
    siteName: "Yusr | يُسر",
    locale: "ar_EG",
    type: "website",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
