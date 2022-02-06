import React, { createContext, useContext, useEffect, useState } from "react"
const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("no user")

  const setUserInfo = (user) => {
    localStorage.setItem("user", user)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser("no user")
  }

  useEffect(() => {
    const oldUser = localStorage.getItem("user")
    console.log(oldUser)
    if (oldUser) {
      setUser(oldUser)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, setUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
