import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import swimmingZone from '../../assets/swimming.png'
import classZone from '../../assets/class.png'
import playZone from '../../assets/playground.png'
import imgZone from '../../assets/bg.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Aside() {
    const [msg, setMsg] = useState({})
    const { user, googleSignIn, githubSignIn } = useContext(AuthContext)
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
    console.log(msg)
    return (
        <aside className="space-y-4">
            <section className="space-y-4">
                {
                    !user
                    &&
                    <>
                        <h4 className="text-lg font-semibold" >Login with</h4>
                        <div className="grid grid-flow-row gap-2">
                            <button onClick={googleLogin} className="flex items-center justify-center gap-3 rounded-sm border border-sky-400 px-4 py-2 text-sm font-medium hover:text-sky-400 cursor-pointer"><FcGoogle />Login with Google</button>
                            <button onClick={githubLogin} className="flex items-center justify-center gap-3 rounded-sm border border-sky-400 px-4 py-2 text-sm font-medium hover:text-sky-400 cursor-pointer"><FaGithub />Login with Github</button>
                        </div>
                    </>
                }
                <h4 className="text-lg font-semibold" >Find Us On</h4>
                <div>
                    <a href="/" target="_blank" className="flex items-center justify-start gap-4 px-6 py-3 border border-gray-300 border-b-0 text-sm font-medium bg-gray-50 hover:bg-gray-200"><FaFacebook /> Facebook</a>
                    <a href="/" target="_blank" className="flex items-center justify-start gap-4 px-6 py-3 border border-gray-300 text-sm font-medium bg-gray-50 hover:bg-gray-200"><FaXTwitter /> Twitter</a>
                    <a href="/" target="_blank" className="flex items-center justify-start gap-4 px-6 py-3 border border-gray-300 border-t-0 text-sm font-medium bg-gray-50 hover:bg-gray-200"><FaInstagram /> Instragram</a>
                </div>
            </section>
            <section className="space-y-4 bg-gray-100 p-4">
                <h4 className="text-lg font-semibold" >Q Zone</h4>
                <img src={swimmingZone} alt="q zone" />
                <img src={classZone} alt="q zone" />
                <img src={playZone} alt="q zone" />
                <img src={imgZone} alt="q zone" />
            </section>
        </aside>
    )
}