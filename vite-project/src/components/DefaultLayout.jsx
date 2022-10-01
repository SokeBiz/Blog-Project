import Navbar from "./Navbar";
import Footer from "./Footer";

function DefaultLayout({ children }) {

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                {children}
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout;