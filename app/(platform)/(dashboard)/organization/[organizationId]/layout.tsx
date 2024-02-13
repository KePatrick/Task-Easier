import React from "react";
import OrgControl from "./org-conrol";

const OrganizationIdLayout = ({children}: {
    children : React.ReactNode
}) => {
    return ( <div className="h-full">
        <OrgControl />
        {children}
    </div> );
}
 
export default OrganizationIdLayout;