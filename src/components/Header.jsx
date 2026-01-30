import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { LuBugOff } from "react-icons/lu";

export const Header = (props) => {
  return (
    <div>
        <nav className="flex justify-between h-20 w-screen border border-b-2 px-20">
            <div className="flex items-center gap-5 px-10">
                <Link to="/">
                    <span className="text-3xl font-bold"><LuBugOff/></span>
                </Link>
            </div>
            <div className="flex items-center gap-10 px-10">
                <div className="flex items-center gap-3">
                    <MdLogin className="w-6 h-6" />
                    <Link to="/login">
                        <span className="text-xl">{props.status}</span>
                    </Link>
                </div>
                <CgProfile className="w-8 h-8" />
            </div>
        </nav>
    </div>
  )
}
