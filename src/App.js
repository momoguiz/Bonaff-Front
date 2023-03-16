import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import AnnonceDetails from "./components/AnnonceDetails"
import Home from "../src/pages/Home"
import Offres from "./pages/Offres"
import Deposer from "./pages/Deposer"
import Demandes from "./pages/Demandes"
import Footer from "./components/Footer"
import EditUser from "./components/EditUser"
import ErrorPage from "./components/ErrorPage"
import Protection from "./components/Protection"


const App = () => {

const token = localStorage.usetoken

  return (
    <div className="page-container">
      <div className="content-wrap">
      <Navbar />
    
       <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/demande" element={<Demandes />} />
        <Route path="/annonces/:id" element={<AnnonceDetails />} />
        
        <Route element={<Protection/>}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<EditUser/>}/>
        <Route path="/deposer" element={<Deposer />} />
        </Route>
    
      <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

















// const App = () => {
  


//   return (
//     <div>
     
//     {/* <Logo /> */}
//       <Navbar />
//       {/* <Annonces/> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Deposer" element={<Deposer />} />
//         <Route path="*" element={<Home />} />
//         <Route path="/Offres" element={<Offres />} />
//         <Route path="/Demande" element={<Demandes />} />
//         <Route path="/Authentifiacation" element={<Authentification />} />
//       </Routes>
//       {/*  */}






//     </div>
//   )
// }
// export default App
