import { Outlet } from "react-router";
import NavBar from "../Components/Navbar";

export default function CareerLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}