import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const MarketingLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
    <div className="h-full">
        <Navbar />
        <main className=" h-full flex items-center justify-center ">
            {children}
        </main>
        <Footer />
    </div> );
}
 
export default MarketingLayout;