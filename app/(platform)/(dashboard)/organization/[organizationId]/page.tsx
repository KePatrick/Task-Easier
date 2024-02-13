import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db"

const OrganizationPage = () => {

    return ( 
        <div className="h-full">


            <form action={create}>
                <input 
                id="title"
                name="title"
                required
                placeholder="請輸入標題"
                className=" border-gray-400 border p1 rounded-md" />
                <Button type="submit">確認</Button>
            </form>
        </div>
     );
}
 
export default OrganizationPage;