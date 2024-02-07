import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local"


const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mb-4 flex items-center border shadow-sm p-4
                 bg-amber-100 text-amber-600 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    manage your task easier
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
                    簡單、快速、好上手的團隊工作管理工具
                </h1>

                <div>

                </div>

            </div>
            <div className="text-5xl md:text-6xl bg-gradient-to-r from-indigo-500 to-sky-600 text-white px-4 p-2 rounded-md">
                <Button className="text-5xl md:text-6xl bg-gradient-to-r from-indigo-500 to-sky-600 text-white px-4 p-2 rounded-md" asChild>
                    <Link href="/sign-up">
                        Tty It !
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default MarketingPage;