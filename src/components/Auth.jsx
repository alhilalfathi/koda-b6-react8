import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  const login = (email, password) => {
    if (email === "koda@mail.com" && password === "1234") {
      setIsLogin(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsLogin(false)
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}