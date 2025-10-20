import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
    const [msg, setMsg] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const { loading, user, sigInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    if (loading) return;
    if (user) return <Navigate to="/" ></Navigate>
    const handleLogin = (e) => {
        e.preventDefault();
        sigInUser(e.target.email.value, e.target.password.value).then(() => {
            setMsg({ type: "success", message: "Successfully Signed in" })
            e.target.reset()
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    const googleLogin = () => {
        googleSignIn().then(() => setMsg({ type: "success", message: "Successfully Signed in" })).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    const githubLogin = () => {
        githubSignIn().then(() => setMsg({ type: "success", message: "Successfully Signed in" })).catch((c) => {
            setMsg({ type: "err", message: c.message })
        })
    }
    return (
        <form onSubmit={handleLogin} className="bg-white w-1/2 mx-auto p-4 m-8 shadow-lg/50 shadow-gray-400">
            <h1 className="flex items-center justify-center text-center text-2xl font-semibold min-h-[20vh]" >Login your account</h1>
            <hr className="border-gray-300 mx-5" />
            {msg && <p className={`${msg.type === 'err' ? 'text-red-600' : 'text-green-600'}`}>{msg.message}</p>}
            <fieldset className='flex flex-col gap-1'>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password:</label>
                <div className='relative flex items-center justify-center'>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" id="password" placeholder='Enter your password' />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute p-1 right-7 top-1/2 -translate-y-1/2 cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <p className="m-2 text-center text-sm">Don't have an account? <Link to="/career" className="text-blue-500 hover:text-blue-600 font-medium">Register</Link></p>
                <button className='bg-black text-white font-semibold w-fit mx-auto px-4 py-2 rounded-md m-2 cursor-pointer'>Login</button>
            </fieldset>
            <div className="flex flex-wrap justify-center gap-2">
                <button onClick={googleLogin} type="button" className="flex items-center justify-center gap-3 rounded-sm border px-4 py-2 text-sm font-medium hover:text-sky-800 w-fit cursor-pointer"><FcGoogle /> Login with Google</button>
                <button onClick={githubLogin} type="button" className="flex items-center justify-center gap-3 rounded-sm border px-4 py-2 text-sm font-medium hover:text-sky-800 w-fit cursor-pointer"><FaGithub /> Login with Github</button>
            </div>
        </form>
    )
}