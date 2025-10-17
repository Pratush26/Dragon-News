export default function Loader() {
    return (
        <section className="flex items-center justify-center gap-2 min-h-[80vh]">
            <div className="h-2 w-1 animate-ping bg-white rounded-full" style={{ animationDelay: "0s" }}></div>
            <div className="h-2 w-1 animate-ping bg-white rounded-full" style={{ animationDelay: "0.2s" }}></div>
            <div className="h-2 w-1 animate-ping bg-white rounded-full" style={{ animationDelay: "0.4s" }}></div>
        </section>
    )
}