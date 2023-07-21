import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './pages/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
