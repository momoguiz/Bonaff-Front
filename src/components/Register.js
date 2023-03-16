import React, { useState } from 'react'
import { register } from '../logic/UserFunctions'
import { Link, useNavigate } from 'react-router-dom'
import '../components/register.css'

const Register = () => {

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState(" ")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState(" ")

  let navigate = useNavigate()

  const createUser = (e) => {
    e.preventDefault()

    const newUser = { // creates new object with name,email, password
      nom: nom, // using useStates
      prenom: prenom,
      email: email,
      password: password,
      telephone: phone
    }


    register(newUser).then(res => { // calls the register function from UserFunctions.js and passes newUser as argument
      navigate(`/login`) // then navigates to login
    })
  }

  return (
    <div className='register'>
      <div className="container">
        <div className="row">


          <h1 className="h1-register">Creer Votre Compte</h1>

          <form className="register-form" noValidate onSubmit={createUser}>
            <div className="form-register">
              <label htmlfor="name" className="label-register">
                Nom :
              </label>
              <input
                className="input-register"
                type="text"
                id="nom"
                name="nom"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />

              <label htmlfor="name" className="label-register">
                Prenom :
              </label>
              <input
                className="input-register"
                type="text"
                id="Prenom"
                name="Prenom"
                placeholder="Prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
              <label htmlfor="email" className="label-contact">
                Adresse email :
              </label>
              <input
                className="input-register"
                type="email"
                id="email"
                nanme="email"
                placeholder="exemple@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlfor="email" className="label-register">
                Mot de Passe :
              </label>
              <input
                className="input-register"
                type="password"
                id="password"
                nanme="password"
                placeholder="Mot de Passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />


              <label htmlfor="phone" className="label-register">
                N° Téléphone :
              </label>
              <input
                className="input-register"
                type="text"
                id="phone"
                name="phone"
                placeholder="+224600000000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="label-register">
                <input type="checkbox" /> En cochant cette case, j'accepte de
                recevoir les bons plans de nos partenaires.
              </label>
              <button className="button-register" type="Submit" value="S'inscrire">
                S'inscrire
              </button>

              <Link to="/login" >
                <button className="button-register" type="Submit" value="se connecter"> Se Connecter </button>
              </Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register