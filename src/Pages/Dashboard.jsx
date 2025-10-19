import { useContext } from "react"
import Loader from "../Components/Loader"
import { AuthContext } from "../Context/AuthContext";

export default function Dashboard() {
    const { loading, user } = useContext(AuthContext)
    if(loading) return <Loader />;
    return (
        <main className="flex flex-col items-center justify-center gap-4 min-h-[80vh]" >
            <img src={user.photoURL} alt="user" className="h-20 aspect-square rounded-full" />
            <p className="text-xl font-semibold">{user.displayName}</p>
            <p>{user.email}</p>
        </main>
    )
}