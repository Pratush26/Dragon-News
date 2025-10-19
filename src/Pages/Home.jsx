import { useEffect, useState } from "react"
import { FaEye, FaStar } from "react-icons/fa"
import { Link, useLoaderData, useParams } from "react-router"

export default function HomePage() {
    const { data } = useLoaderData()
    const [dataSet, setDataSet] = useState([])
    const { category } = useParams()
    const [fiteredData, setFiteredData] = useState(dataSet)
    useEffect(() => {
        setDataSet(data)
    }, [data])
    useEffect(() => {
        if (category === '0' || category == null) setFiteredData(dataSet)
        else if (category === '1') setFiteredData(dataSet.filter(e => e.others.is_today_pick))
        else setFiteredData(dataSet.filter(e => e.category_id == category))
    }, [category, dataSet, data])

    return (
        <main className="space-y-4">
            <h5>Available ({fiteredData.length})</h5>
            {
                fiteredData.map(e => (
                    <section key={e.id} className="shadow-lg/50 space-y-3 shadow-gray-400 border border-gray-100 rounded-2xl p-6">
                        <h6 className="text-xl font-semibold">{e.title}</h6>
                        <div className="flex items-center justify-between px-2">
                            <span className="flex items-center gap-4 text-sm font-semibold">
                                <img src={e.author.img} alt={e.author.name} className="rounded-full h-7 aspect-square" />
                                <p>{e.author.name}</p>
                            </span>
                            <p className="text-gray-400 text-sm">{new Date(e.author.published_date).toLocaleString()}</p>
                        </div>
                        {
                            e.thumbnail_url ?
                                <img src={e.thumbnail_url} alt={e.title} className="w-full aspect-video rounded-lg" />
                                :
                                <div className="w-full aspect-video bg-gray-100"></div>
                        }
                        <p className="line-clamp-3 text-gray-500">{e.details}</p>
                        <Link state={e} to='/details' className="text-amber-500 font-semibold hover:underline">Read more...</Link>
                        <hr className="border-gray-300 mt-3" />
                        <div className="flex items-center justify-between">
                            <span className="flex gap-2 text-amber-300">
                                {Array.from({ length: e.rating?.number }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </span>
                            <span className="flex items-center gap-2 text-gray-600"><FaEye /> <p className="text-sm">{e.total_view}</p></span>
                        </div>
                    </section>
                ))
            }
        </main>
    )
}