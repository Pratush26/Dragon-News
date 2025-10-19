import { NavLink, useLoaderData } from "react-router"

export default function CategoryBar() {
    const { category } = useLoaderData()
    return (
        <aside className="grid grid-flow-row gap-2 h-fit">
            <h4 className="text-lg font-semibold">All Category</h4>
            {
                category?.map(e => (
                    <NavLink to={`/${e.id}`} key={e.id} className={({ isActive }) => `${isActive ? "bg-pink-700 text-white" : "bg-gray-100 hover:bg-gray-300 text-gray-600"} px-6 py-2 text-start rounded-sm font-semibold cursor-pointer`} >
                        {e.name}
                    </NavLink>
                ))
            }
        </aside>
    )
}