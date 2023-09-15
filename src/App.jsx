import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from 'react-router-dom'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
