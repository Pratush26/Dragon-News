import { useLocation } from "react-router";
import Header from "../Components/Header";
import Details from "../Pages/Details";
import Aside from "./Home/Aside";

export default function DetailsLayout() {
    const { state } = useLocation()
    return (
        <>
        <Header />
        <main className="grid grid-cols-[80%_20%] gap-6 w-11/12 mx-auto">
            <Details e={state} />
            <Aside />
        </main>
        </>
    )
}