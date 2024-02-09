"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useMoblileSideBar } from "@/hooks/use-mobile-sidebar"

export const MobileSidebar = () =>{

    const pathname = usePathname
    //是否被掛載
    const [isMounted, setMounted] = useState(false);

    const onOpen = useMoblileSideBar((state) => state.onOpen);
    const onClose = useMoblileSideBar((state) => state.onClose);
    const isOpen = useMoblileSideBar((state) => state.isOpen);

    useEffect(() => {
        setMounted(true);
    },[])

    useEffect(() => {
        onClose();
    },[pathname, onClose])

    if (!isMounted) {
        return null;
    }

    return(
        <div></div>
    )    
}