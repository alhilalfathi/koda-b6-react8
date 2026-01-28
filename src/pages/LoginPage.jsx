import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


export const LoginPage = () => {
  const {handleSubmit, register} = useForm()
  const navigate = useNavigate()
  const submitForm = (data) =>{
    if(data.email === "koda@mail.com" && data.password === "1234"){
        navigate("/")
    }else {
        alert("email atau password salah")
    }
  }
  return (
    <div className="bg-[#161919] py-10 flex justify-center h-screen">
      <form onSubmit={handleSubmit(submitForm)} className="bg-white w-[60%] min-h-[60vh] flex flex-col justify-center items-center gap-3 px-10 pb-10 rounded-xl">
        <h1 className="font-bold text-3xl py-20 ">Welcome to Login page</h1>
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
