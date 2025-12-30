import { Curriculum } from "@/components/bootcamp/Curriculum";
import { Instructor } from "@/components/bootcamp/Instructor";
import { Pricing } from "@/components/bootcamp/Pricing";

export default function BootcampPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero for Bootcamp */}
            <div className="bg-primary text-primary-foreground py-20 text-center">
                <div className="container">
                    <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6">
                        UX Design Bootcamp
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                        برنامج مكثف لمدة 6 أسابيع لإتقان تصميم تجربة المستخدم من البحث إلى التنفيذ.
                    </p>
                </div>
            </div>

            <Instructor />
            <Curriculum />
            <Pricing />
        </div>
    );
}
