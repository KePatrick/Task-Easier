import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
    return (
        <div className=" fixed bottom-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center ">
            <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-center ">
                <div className=" space-x-4 md:block md:w-auto flex items-center justify-center w-full">
                    <Button asChild size="sm" variant={"ghost"}>
                        <Link href={("/sign-up")} className=" font-bold text-lg ">
                            聯絡我們
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;