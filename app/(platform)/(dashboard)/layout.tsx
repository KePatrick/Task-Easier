import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import { ReactNode } from "react";
import NavBar from "./_components/navbar";

const DashboardLayout = ({children}:
    {
        children: ReactNode;
    }) => {
    const { userId, orgId } = auth();
    return ( 
        <div className="h-full">
            <NavBar />
            {children}
        </div>
     );
}
 
export default DashboardLayout;