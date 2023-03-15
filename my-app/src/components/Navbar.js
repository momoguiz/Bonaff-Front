
import { Link } from "react-router-dom";

const Navbar =()=>{
return(
  <div className="navbar">
    <ul>
    <Link to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}> <li> ACCEUIL </li></Link>
      <Link to='/Deposer' className={(nav) => (nav.isActive ? "nav-active" : "")}><li> DEPOSER UNE ANNOCNES </li></Link>
      <Link to='/Offres' className={(nav) => (nav.isActive ? "nav-active" : "")}><li> OFFRES </li></Link>
      <Link to='/Demande' className={(nav) => (nav.isActive ? "nav-active" : "")}><li> DEMANDES </li></Link>
      <Link to='/Authentifiacation' className={(nav) => (nav.isActive ? "nav-active" : "")}><li> S'inscrire/Se Conecter </li></Link>
    </ul>
 </div> 
 )
}
export default Navbar






















// import React from 'react'
// import { Link, withRouter, useHistory, useNavigate } from 'react-router-dom'



// const Navbar = () =>  {
//   let navigate = useNavigate()


//   const logOut = (e) => {
//     e.preventDefault()
//     localStorage.removeItem('usertoken')
//     navigate(`/`)
//   }
  
//   const loginRegLink = (
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <Link to="/login" className="nav-link">
//           Login
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/register" className="nav-link">
//           Register
//         </Link>
//       </li>
//     </ul>
//   )

//   const userLink = (
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <Link to="/profile" className="nav-link">
//           User
//         </Link>
//       </li>
//       <li className="nav-item">
//         <a href="" onClick={logOut} className="nav-link">
//           Logout
//         </a>
//       </li>
//     </ul>
//   )
   

//     return (
        
        
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarsExample10"
//           aria-controls="navbarsExample10"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-md-center"
//           id="navbarsExample10"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>
//           </ul>
//           {localStorage.usertoken ? userLink : loginRegLink}
//         </div>
//       </nav>
//     )
//   }

// export default Navbar 