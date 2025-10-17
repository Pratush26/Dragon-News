import { NavLink } from "react-router";
import '../utils/utility.css'
// import { useContext, useState } from "react";
// import { AuthContext } from "../Context/AuthContext";

export default function NavBar() {
    // const [msg, setMsg] = useState({})
    // const { user, loading, signOutUser } = useContext(AuthContext)
    // const handleLogout = () => {
    //     signOutUser().then(() => setMsg({ type: "success", message: "Successfully Signed Out" })).catch((c) => {
    //         setMsg({ type: "err", message: c.message })
    //     })
    // }
    // console.log(msg)
    return (
        <nav className="flex items-center justify-center gap-5 p-4 w-11/12 mx-auto">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            {/* {
                loading ?
                    <section className="flex items-center justify-center gap-2">
                        <div className="h-1 w-1 animate-ping bg-white rounded-full" style={{ animationDelay: "0s" }}></div>
                        <div className="h-1 w-1 animate-ping bg-white rounded-full" style={{ animationDelay: "0.2s" }}></div>
                        <div className="h-1 w-1 animate-ping bg-white rounded-full" style={{ animationDelay: "0.4s" }}></div>
                    </section>
                    :
                    user ?
                        <button onClick={handleLogout} className="cursor-pointer px-3 py-2 hover:bg-gray-900 rounded-sm">LogOut</button>
                        :
                        <>
                            <NavLink to='/register'>Register</NavLink>
                            <NavLink to='/login'>Login</NavLink>
                        </>
            } */}
            <NavLink to='/dashboard'>Career</NavLink>
        </nav>
    )
}