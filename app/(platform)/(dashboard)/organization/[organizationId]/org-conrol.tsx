"use client"

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const OrgControl = () => {
    //get OrgId
    const params = useParams();

    //get Active?
    const { setActive } = useOrganizationList();

    useEffect( ()=>{
        if (!setActive) return;

        //設置orgId
        setActive({
            organization: params.organizationId as string,
        });
    }, [setActive, params.organizationId]);
    return null;
    
}
 
export default OrgControl;