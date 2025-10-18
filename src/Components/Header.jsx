import { format } from "date-fns";
import headerLogo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center gap-2 p-4 w-11/12 mx-auto">
        <img src={headerLogo} alt="Dragon news" />
        <p className="text-gray-400 text-sm font-medium">Journalism Without Fear or Favour</p>
        <p className="text-gray-700 font-medium">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
        </header>
    )
}