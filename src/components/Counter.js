import React, { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthProvider"

const Counter = () => {
  const [num, setNum] = useState(0)
  const [value, setValue] = useState("")

  const { user } = useAuth()
  // useEffect(() => {
  //   console.log(num)
  // }, [num])

  console.log(user)

  // useEffect(() => {
  //   const counter = setInterval(() => {
  //     setNum((oldNum) => oldNum + 1)
  //     console.log("interval")
  //   }, 1000)

  //   return () => {
  //     clearInterval(counter)
  //   }
  // }, [])

  return (
    <div className="counter">
      {num}
      <button onClick={() => setNum(num + 1)}> + </button>
      <button onClick={() => setNum(num - 1)}> - </button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default Counter
