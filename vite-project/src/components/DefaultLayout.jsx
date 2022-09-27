import Navbar from "./Navbar";

function DefaultLayout({ children }) {

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                {children}
            </div>
        </>
    )
}

export default DefaultLayout;