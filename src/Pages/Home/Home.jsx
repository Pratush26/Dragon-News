import Marquee from "react-fast-marquee";
import CategoryBar from "./CategoryBar";

export default function HomePage() {
    return (
        <main className="w-11/12 mx-auto grid grid-cols-3">
            <CategoryBar />
        </main>
    )
}