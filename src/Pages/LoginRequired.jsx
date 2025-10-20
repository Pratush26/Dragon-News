import { Link } from "react-router";

export default function LoginRequiredPage() {
    return (
        <main className="flex flex-col items-center-safe justify-center-safe gap-10 min-h-screen">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-pink-700 text-3xl font-semibold">User's Content</h1>
                <p className="animate-bounce">Login is required</p>
            </div>
            <div className="space-x-2">
                <Link to="/career/login" className="px-4 py-2 bg-pink-700 text-white font-semibold animate-bounce" >Login</Link>
                <Link to="/" className="px-4 py-2 bg-pink-700 text-white font-semibold animate-bounce" >back to Home</Link>
            </div>
        </main>
    )
}