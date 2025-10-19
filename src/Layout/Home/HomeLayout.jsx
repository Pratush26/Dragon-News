import Marquee from "react-fast-marquee";
import Header from "../../Components/Header";
import NavBar from "../../Components/Navbar";
import { Outlet, useLoaderData } from "react-router";
import CategoryBar from "./CategoryBar";
import Aside from "./Aside";
import { NavLink } from "react-router";

export default function HomeLayout() {
    const { news } = useLoaderData()
    return (
        <>
            <Header />
            <section className="flex p-4 w-11/12 mx-auto gap-4 bg-gray-100">
                <div className="px-4 py-2 bg-pink-700 text-white font-semibold">Latest</div>
                <Marquee autoFill="true" pauseOnHover="true">
                    {news.filter(e => e.others.is_today_pick).map(e => (
                        <NavLink to={'/'} key={e.id} className="mx-6 text-gray-800">{e.title}</NavLink>
                    ))}
                </Marquee>
            </section>
            <NavBar />
            <main className="w-11/12 mx-auto grid grid-cols-[18%_60%_18%] gap-6">
                <CategoryBar />
                <Outlet />
                <Aside />
            </main>
        </>
    )
}