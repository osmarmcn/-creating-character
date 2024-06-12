// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Cadastro } from './page/Cadastro/Cadastro'
import { Login } from './page/Login/Login'
import { Recuperar } from './page/Recuperar/Recuperar'
import './App.css'

function App() {


  return (
   

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/recuperar" element={<Recuperar/>}/>
          {/* <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
        
      </Routes>
  </BrowserRouter>
  )
}

export default App
