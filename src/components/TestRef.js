import React, { useRef } from "react"
import { useState } from "react/cjs/react.development"
import { useAuth } from "../contexts/AuthProvider"

const TestRef = () => {
  const formRef = useRef()
  const [state, setState] = useState("")

  const { user, setUserInfo, logout } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = formRef.current.querySelector("input")
    setUserInfo(input.value)
    input.value = ""
  }

  return (
    <div>
      <h1>user: {user}</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input value={state} onChange={(e) => setState(e.target.value)} />
        <button type="submit">click me</button>
      </form>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default TestRef
