import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/navBar.css'
const Navbar = () => {
let navigate = useNavigate()


  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    navigate(`/`)
  }

  const loginRegLink = (
    <div className='navbar'>
      <ul className='navbar_ul'>
        <Link to='/'> <li > ACCEUIL </li></Link>
        <Link to='/Offres'><li > OFFRES </li></Link>
        <Link to='/Demande'><li> DEMANDES </li></Link>
        <Link to='/register'><li > S'inscrire/Se Connecter </li></Link>
      </ul>
    </div>
  )


  const userLink = (
    <ul>
      <Link to="/profile" > <li> MON PROFIL</li> </Link>
      <Link to='/'> <li > ACCEUIL </li></Link>
      <Link to='/Deposer' > <li> DEPOSER UNE ANNOCES </li></Link>
      <Link to='/Offres'><li > OFFRES </li></Link>
      <Link to='/Demande'><li> DEMANDES </li></Link>

      <li > <a href="" onClick={logOut} > DECONECTER </a> </li>
    </ul>
  )

  return (
        <div> {localStorage.usertoken ? userLink : loginRegLink} </div>

  )
}

export default Navbar