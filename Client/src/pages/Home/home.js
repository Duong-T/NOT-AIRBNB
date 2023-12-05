import Header from "../../Components/Header/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Update from "../../Components/Auth/update";
import Filter from "../../Components/Filter/filter";

const Home = () => {


    return (
        <>
            {/* <Update /> */}
            <div>
                <Header />
                <Filter />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>

        </>

    )
}

export default Home;