import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit';
import Github from './icon';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="App">
    <h1>Meme_Editzzz</h1>
    <Github />
    <p style={{fontFamily:"sans serif",fontStyle:"oblique",textDecoration:"underline"}}>Put a Star ⭐ </p>
     <div className="contents">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/edit/' element={<Edit />}/>
    </Routes>
    </div>
  </div>
    </>
  )
}

export default App
