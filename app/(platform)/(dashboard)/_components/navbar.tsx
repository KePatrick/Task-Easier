import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const NavBar = () => {
    return (
        <div className="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center px-3">
            {/* {TODO: Sidebar} */}
            <div className="flex items-center gap-x-4">
                <div className=" hidden md:flex">
                    <Logo />
                </div>
                <Button size="sm" className=" rounded-sm hidden md:block h-auto py-1.5 px-2">
                    create
                </Button>
                <Button size="sm" className=" rounded-sm block md:hidden h-auto py-1.5 px-2">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <div className=" ml-auto flex items-center gap-x-2 ">
                <OrganizationSwitcher
                    hidePersonal
                    afterSelectOrganizationUrl="/organization/:id"
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/selet-org"
                    appearance={
                        {
                            elements: {
                                rootBox: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            }
                        }
                    }
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={
                        {
                            elements:
                            {
                                avatarBox: {
                                    height: 32,
                                    width: 32,
                                }
                            }
                        }
                    }
                />
            </div>
        </div>
    );
}

export default NavBar;