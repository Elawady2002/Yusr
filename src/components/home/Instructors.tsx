"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const instructors = [
    {
        name: "أمير يسري",
        role: "مؤسس يُسر",
        image: "/placeholder-user.jpg" // Placeholder
    },
    {
        name: "سارة علي",
        role: "Product Designer",
        image: "/placeholder-user.jpg"
    },
    {
        name: "خالد عمر",
        role: "UX Researcher",
        image: "/placeholder-user.jpg"
    },
    {
        name: "نور أحمد",
        role: "UI Developer",
        image: "/placeholder-user.jpg"
    },
];

export function Instructors() {
    return (
        <section className="py-20 bg-background text-center">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-4">نخبة المدربين</h2>
                <p className="text-muted-foreground mb-12">تعلم من خبراء يعملون في كبرى الشركات العالمية</p>

                <div className="flex flex-wrap justify-center gap-12">
                    {instructors.map((inst, i) => (
                        <div key={i} className="flex flex-col items-center gap-4">
                            <Avatar className="w-24 h-24 border-2 border-primary">
                                <AvatarImage src={inst.image} alt={inst.name} />
                                <AvatarFallback className="text-xl font-bold bg-muted text-muted-foreground">
                                    {inst.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h3 className="font-bold text-lg">{inst.name}</h3>
                                <p className="text-sm text-primary">{inst.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
