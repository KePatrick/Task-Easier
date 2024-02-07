import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const logoFont = localFont({
    src: "../public/fonts/font.woff2"
})

const Logo = () => {
    return (
        <Link href="/">
            <div className=" hover:opacity-75 items-center gap-x-2 hidden md:flex ">
                <Image src="/logo.svg" alt="logo" width={30} height={30} />
                <p className={cn(" text-lg  ", logoFont.className)
                }>
                    Task Easier
                </p>
            </div>
        </Link>

    );
}

export default Logo;
