import { useState } from "react"
import { useLoaderData } from "react-router"

export default function CategoryBar() {
    const [selected, setSelected] = useState(0)
    const { category }  = useLoaderData()
    return (
        <aside className="grid grid-flow-row gap-2">
            <h4 className="text-lg font-semibold">All Category</h4>
            {
                category?.map(e => (
                    <button onClick={() => setSelected(e.id)} key={e.id} className={`px-6 py-2 text-start rounded-sm ${selected === e.id ? 'bg-pink-700 text-white' : 'bg-gray-100 hover:bg-gray-300 text-gray-600' } font-semibold cursor-pointer`}>{e.name}</button>
                ))
            }
        </aside>
    )
}