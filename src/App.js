import React from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Id from "./pages/Id"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const location = useLocation()

  console.log(location)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/id/:name" element={<Id />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  )
}

export default App
