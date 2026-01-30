import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { LuBugOff } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../components/Auth";


export const LoginPage = () => {
  const {handleSubmit, register} = useForm()
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)

  const submitForm = (data) =>{
    const success = login(data.email, data.password)

    if(success){
        navigate("/")
    }else {
        alert("email atau password salah")
    }
  }
  return (
    <div className="bg-[#161919] py-10 flex justify-center h-screen">
      <form onSubmit={handleSubmit(submitForm)} className="bg-white w-[60%] min-h-[60vh] flex flex-col justify-center items-center gap-3 px-10 pb-10 rounded-xl">
        <div className=" py-20 flex flex-col items-center">
          <LuBugOff className="w-20 h-20"/>
          <h1 className="font-bold text-3xl ">Welcome to Login page</h1>
        </div>
        <div className="flex items-center w-full gap-3 border rounded-xl px-3">
            <MdEmail />
            <input {...register("email")} type="email" id="email"  placeholder="Input Email" className="w-full p-2" />
        </div>
        <div className="flex items-center w-full gap-3 border rounded-xl px-3">
            <RiLockPasswordFill />
            <input {...register("password")} type="password" id="password"  placeholder="Input Password" className="w-full p-2" />
        </div>
        <button  className="px-3 py-2 bg-black text-white rounded-xl w-full">Login</button>
      </form>
    </div>
  )
}
