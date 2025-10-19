import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <main className="flex flex-col items-center-safe justify-center-safe gap-10 min-h-screen">
            <div className="flex items-center justify-center gap-4">
                <h1 className="text-pink-700 text-5xl font-semibold">404</h1>
                <span className="space-y-1 border-l-pink-700 pl-6 border-l-2">
                    <p>Page not found!</p>
                    <p>Refresh the page or try again</p>
                </span>
            </div>
            <Link to="/" className="px-4 py-2 bg-pink-700 text-white font-semibold animate-bounce" >Go back to Home</Link>
        </main>
    )
}