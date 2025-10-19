import { Link, NavLink } from "react-router";
import '../utils/utility.css'
import { FaCircleUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function NavBar() {
    const [msg, setMsg] = useState({})
    const { user, loading, signOutUser } = useContext(AuthContext)
    const handleLogout = () => {
        signOutUser().then(() => setMsg({ type: "success", message: "Successfully Signed Out" })).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    console.log(msg)
    return (
        <nav className="grid grid-cols-5 justify-items-end-safe items-center gap-5 py-4 w-11/12 mx-auto">
            <div className="flex items-center justify-center gap-3 col-span-3">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    user ?
                        <NavLink to='/career/dashboard'>Career</NavLink>
                        :
                        <NavLink to='/career'>Career</NavLink>
                }
            </div>
            <div className="flex items-center justify-center gap-3 col-span-2">
                {
                    loading ?
                        <section className="flex items-center justify-center gap-2">
                            <div className="h-2 w-1 animate-ping bg-pink-800 rounded-full" style={{ animationDelay: "0s" }}></div>
                            <div className="h-2 w-1 animate-ping bg-pink-800 rounded-full" style={{ animationDelay: "0.2s" }}></div>
                            <div className="h-2 w-1 animate-ping bg-pink-800 rounded-full" style={{ animationDelay: "0.4s" }}></div>
                        </section>
                        :
                    user ?
                    <span className="flex items-center gap-4">
                        <img src={user.photoURL} alt="user" className="h-7 aspect-square rounded-full" />
                        <button onClick={handleLogout} className='bg-gray-900 font-semibold text-white px-6 py-1 rounded-sm' >Log out</button>
                    </span>
                :
                <span className="flex items-center text-2xl justify-center gap-2">
                    <FaCircleUser />
                    <Link to='/career/login' className='bg-gray-900 text-base font-semibold text-white px-6 py-1 rounded-sm' >Login</Link>
                </span>
                }
            </div>
        </nav>
    )
}