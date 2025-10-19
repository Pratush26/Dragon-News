import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router"

export default function HomePage() {
    const { data } = useLoaderData()
    const [dataSet, setDataSet] = useState([])
    const { category } = useParams()
    const [fiteredData, setFiteredData] = useState(dataSet)
    useEffect(() => {
        setDataSet(data)
    }, [])
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
                            <p className="text-gray-400 text-sm">{e.author.published_date}</p>
                        </div>
                        <img src={e.thumbnail_url} alt={e.title} className="w-full aspect-video rounded-lg" />
                        <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
                            {e.tags.map((t, i) => (<p key={i} className="px-3 py-1 bg-gray-100 rounded-xl">{t}</p>))}
                        </div>
                    </section>
                ))
            }
        </main>
    )
}