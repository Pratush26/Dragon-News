import { NavLink } from "react-router"
import { FaEye, FaStar } from "react-icons/fa"
import { FaArrowLeftLong } from "react-icons/fa6"

export default function Details({ e }) {
    console.log(e.title)
    return (
        <section className="space-y-3 p-6">
            <div className="flex items-center justify-between px-2">
                <span className="flex items-center gap-4 text-sm font-semibold">
                    <img src={e.author.img} alt={e.author.name} className="rounded-full h-7 aspect-square" />
                    <p>{e.author.name}</p>
                </span>
                <p className="text-gray-400 text-sm">{new Date(e.author.published_date).toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-600"><p className="text-sm">{e.total_view}</p> <FaEye /></span>
                <span className="flex gap-2 text-amber-300">
                    {Array.from({ length: e.rating?.number }).map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </span>
            </div>
            <hr className="border-gray-300 mt-3" />
            {
                e.image_url ?
                    <img src={e.image_url} alt={e.title} className="w-full aspect-video rounded-lg" />
                    :
                    <div className="w-full aspect-video bg-gray-100"></div>
            }
            <h6 className="text-xl font-semibold">{e.title}</h6>
            <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
                {e.tags.map((t, i) => (<p key={i} className="px-3 py-1 bg-gray-100 rounded-xl">{t}</p>))}
            </div>
            <p className="text-gray-500">{e.details}</p>
            <NavLink to='/' className="px-6 py-2 bg-pink-700 text-white flex items-center gap-3 w-fit rounded-sm"><FaArrowLeftLong /> All news in this category</NavLink>
        </section>
    )
}