import React from "react"
import { useAuth } from "../contexts/AuthProvider"

const Logic = ({ title }) => {
  const { user } = useAuth()

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
      }}
    >
      <h1>{user}</h1>
      <h1>JS boolean of "{title}"</h1>
      <p>1. {title ? "true" : "false"}</p>
      <p>2. {title && "show this if this true"}</p>
      <p>3. {title || "show this if this false"}</p>
    </div>
  )
}

export default Logic
