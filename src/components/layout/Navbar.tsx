"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navigation = [
    { name: "الرئيسية", href: "/" },


    { name: "من نحن", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container max-w-6xl mx-auto flex h-20 items-center justify-between">
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Image
                            src="/Yusr/logo.svg"
                            alt="Yusr Logo"
                            width={40}
                            height={40}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-primary text-foreground/80"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Actions & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Button asChild size="lg" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-md h-12">
                        <Link href="https://whatsapp.com/channel/0029VajBHqo8qIzyWzK6S938" target="_blank">زيارة المجتمع</Link>
                    </Button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="pr-0">
                            <div className="flex flex-col gap-6 px-7 mt-8">
                                <Link
                                    href="/"
                                    className="flex items-center space-x-2 rtl:space-x-reverse"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Image
                                        src="/Yusr/logo.svg"
                                        alt="Yusr Logo"
                                        width={32}
                                        height={32}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-lg font-medium transition-colors hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Button asChild className="mt-4 w-full bg-primary text-white font-bold h-12">
                                        <Link href="https://whatsapp.com/channel/0029VajBHqo8qIzyWzK6S938" target="_blank" onClick={() => setIsOpen(false)}>
                                            زيارة المجتمع
                                        </Link>
                                    </Button>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
