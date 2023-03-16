import React, {useState} from 'react'
import {login} from '../logic/UserFunctions'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError]=useState(false)
    let navigate = useNavigate()

    const testLogin = (e) =>{
        e.preventDefault()

        const user = {
            email : email,
            password : password
        }
        
        
        login(user).then(res => {
            if(res) {
                navigate('/profile')
            } else{
              setError(true)
            }
        })

    }

    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={testLogin}>
              <h1 className="h3 mb-3 font-weight-normal"> Veuillez vous Connecter</h1>
              <div className="form-group">
                <label htmlFor="email"> Adresse Email</label>
                <input
                  type="email"
                  className="form-control"
                  nom="email"
                  placeholder="Entrer votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p> Veuillez entrer un email/mot de passe valide </p>}
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Connecter
                
              </button>
            </form>
          </div>
        </div>
      </div>
    )
} 

export default Login