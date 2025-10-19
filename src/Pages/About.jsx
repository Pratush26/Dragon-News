import Header from "../Components/Header";
import NavBar from "../Components/Navbar";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-center gap-4 min-h-[80vh]">
            <Header />
            <NavBar />
            <p>This is a news website</p>
        </main>
    )
}