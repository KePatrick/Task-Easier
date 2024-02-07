import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const CreateOrganizationPage = () => {
    const { userId, orgId } = auth();
    return ( 
        <div>
            <OrganizationSwitcher/>
        </div>
     );
}
 
export default CreateOrganizationPage;