import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [value, setValue] = useState()

  const navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault()
    console.log(value)
    // api
    navigate("/home")
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={onLogin}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Login
