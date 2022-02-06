import { useState } from "react/cjs/react.development"
import "./App.css"
import Counter from "./components/Counter"
import Logic from "./components/Logic"
import TestRef from "./components/TestRef"
import AuthProvider from "./contexts/AuthProvider"

function App() {
  const header = <h1>hello</h1>

  const num = 1

  const [show, setShow] = useState(true)

  const toggle = () => {
    setShow((show) => !show)
  }

  return (
    <div>
      {/* {header}
      {num}
      <button onClick={toggle}>toggle</button> */}
      <AuthProvider>
        <Logic title={"วัยรุ่นโกโกวา"} />
        <TestRef />
        <Counter />
      </AuthProvider>
      {/* <Logic title={""} />
      <Logic title={null} />
      <Logic title={undefined} />
      <Logic title={false} />
      <Logic title={0} /> */}
    </div>
  )
}

export default App
