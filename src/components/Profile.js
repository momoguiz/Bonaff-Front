import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  
  const [details, setDetails] = useState({
    id: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: ""
    
  });

  const token = localStorage.usertoken;
const navigate=useNavigate()

  useEffect(() => {
    getProfil();
  }, []);
  
  const getProfil = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    // console.log(decoded);
    setDetails({
      id: decoded.user._id,
      nom: decoded.user.nom,
      prenom: decoded.user.prenom,
      email: decoded.user.email,
      telephone: decoded.user.telephone
    })
  };

  const delUser = () => {
    axios.delete('http://localhost:8000/api/currentUser',
    { headers:{'auth-token':token}
        }
    )
        .then(res => {
          localStorage.clear()
        navigate('/') 
          console.log('Supprimé')})
        .catch(err => console.log(err))
        
}


  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">Votre Profile</h1>
        </div>


        
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Nom</td>
              <td>{details.nom}</td>
            </tr>
            <tr>
              <td>Prenom</td>
              <td>{details.prenom}</td>
            </tr>
            
            <tr>
              <td>Email</td>
              <td>{details.email}</td>
            </tr>
            <tr>
              <td>Telephone</td>
              <td>{details.telephone}</td>
            </tr>
          </tbody>
        </table>
        
        <Link to="/edit" >
        <button> Editer le profil </button>
        
        </Link>
        <button onClick={delUser}> Supprimer le compte </button>

      </div>
    </div>
  );
};

export default Profile;
