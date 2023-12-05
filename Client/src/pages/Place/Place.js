import { useSelector } from "react-redux";
import Header from "../../Components/Header/header";
import Place1 from "../../Components/Place/place";
import Listing from "../../Components/Place/listing";


const Place = () => {
    const isloggin = useSelector((state) => state.auth.login?.success)

    return (
        <>
            <div>
                <Header />
                {isloggin ? <Listing /> : <Place1 />}
            </div>
        </>
    )

}

export default Place