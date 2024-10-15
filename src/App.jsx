import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Project from './Component/Project'
import About from './Component/About'
import Contact from './Component/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
