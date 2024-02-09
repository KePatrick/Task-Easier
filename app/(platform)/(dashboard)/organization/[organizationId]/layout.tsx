import React from "react";
import OrgControl from "./org-conrol";

const OrganizationIdLayout = ({children}: {
    children : React.ReactNode
}) => {
    return ( <>
        <OrgControl />
        {children}
    </> );
}
 
export default OrganizationIdLayout;