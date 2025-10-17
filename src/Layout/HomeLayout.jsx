import Marquee from "react-fast-marquee";
import Header from "../Components/Header";
import NavBar from "../Components/Navbar";
import HomePage from "../Pages/Home/Home";
import { useLoaderData } from "react-router";

export default function HomeLayout() {
    const { data } = useLoaderData()
    console.log(data)
    return (
        <>
            <Header/>
            <section className="flex p-4 w-11/12 mx-auto gap-4 bg-gray-100">
            <div className="px-4 py-2 bg-secondary text-secondary-content font-semibold">Latest</div>
            <Marquee autoFill="true" pauseOnHover="true">
                <p className="mx-3">Lorem ipsum dolor sit </p>
            </Marquee>
            </section>
            <NavBar />
            <HomePage />
        </>
    )
}