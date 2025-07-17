import React from 'react'
import { NavLink, Routes, Route} from 'react-router'
import Api from './page/APi.jsx'
import Notfound from './page/Notfound.jsx'
import Home from './page/Home.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/api" element={<Api/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </div>
  )
}

export default App