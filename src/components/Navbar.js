import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div
      style={{
        height: 64,
        backgroundColor: "orange",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>Exceed</h1>
      <div className="link">
        <Link to="/login">login </Link>
        <Link to="/register">register</Link>
        <Link to="/home">home</Link>
      </div>
    </div>
  )
}

export default Navbar
