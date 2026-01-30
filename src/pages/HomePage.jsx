import { useContext } from "react"
import { Header } from "../components/Header"
import { AuthContext } from "../components/Auth"



export const HomePage = () => {
const auth = useContext(AuthContext)
const {isLogin, logout} = auth

  return (
    <div>
      {isLogin ? (
        <div >
          <Header status={"Logged in"} />
          <div className="flex justify-center py-60 flex-col items-center gap-5">
            <h1 className="text-2xl font-bold">Welcome, you are logged in</h1>
            <button onClick={logout} className="bg-black text-white p-3 rounded">Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <Header status={"Login"} />
          <div className="flex justify-center py-60">
            <h1 className="text-2xl font-bold">Please login</h1>
          </div>
        </div>
      )}
    </div>
  )
}
