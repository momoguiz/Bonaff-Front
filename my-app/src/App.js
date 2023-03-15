import React from "react"
import { Routes, Route } from "react-router-dom"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import Home from "../src/pages/Home"
import Annonces from "./components/Annonces"
import Offres from "./pages/Offres"
import Deposer from "./pages/Deposer"
import Demandes from "./pages/Demandes"
import Authentification from "./pages/Authentification"






const App =() =>{
  return(
    <div> 
      
       <Logo />
       <Navbar/ >
       <Annonces/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Deposer" element={<Deposer />}/>
      <Route path="*" element={<Home />}/>
      <Route path="/Offres" element={<Offres/>} />
      <Route path="/Demande" element={<Demandes/>} />
      <Route path="/Authentifiacation" element={<Authentification/>} />
      </Routes>
    
    </div>
  )
}
export default App
