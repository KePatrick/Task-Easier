import { OrganizationList } from "@clerk/nextjs";
import NavBar from "../_components/navbar";

export default function CreateOrganizationPage() {
    return(
        <div className="w-full flex justify-center items-center">
            <NavBar />
        <OrganizationList 
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        /></div>
    )
}