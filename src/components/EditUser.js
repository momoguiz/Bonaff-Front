import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

const EditUser = () => {
    const initialValue = {
        id: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: ""

    }


    const [details, setDetails] = useState(initialValue)
    const [updateUser, setUpdateUser] = useState(initialValue)
    const token = localStorage.usertoken;

    useEffect(() => {
        getProfil();

    },[]);


    const getProfil = async () => {
        const decoded = await jwtDecode(token);
        // console.log(decoded);
        setDetails({
            nom: decoded.user.nom,
            prenom: decoded.user.prenom,
            email: decoded.user.email,
            telephone: decoded.user.telephone
        })
        setUpdateUser({
            
            nom: decoded.user.nom,
            prenom: decoded.user.prenom,
            email: decoded.user.email,
            telephone: decoded.user.telephone
        })
    };

    const editUser = () => {
       
        axios.put('http://localhost:8000/api/currentUser',updateUser,
        { headers:{'auth-token':token}
            }
        )
            .then(res => console.log('Edité'))
            .catch(err => console.log(err))
            
    }

    
    
    

    // let instance = axios.create({
    //     headers: {
    //       post: {        // can be common or any other method
    //         header1: 'value1'
    //       }
    //     }
    //   })
    console.log(updateUser)
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
                            <td><input type="text" onChange={e =>
                                e.target.value ?
                                    setUpdateUser({ ...updateUser, nom: e.target.value }) :
                                    setUpdateUser({ ...updateUser, nom: details.nom })} /></td>
                        </tr>
                        <tr>
                            <td>Prenom</td>
                            <td><input type="text" onChange={e =>
                                e.target.value ?
                                    setUpdateUser({ ...updateUser, prenom: e.target.value }) :
                                    setUpdateUser({ ...updateUser, prenom: details.prenom })} /></td>
                        </tr>

                        <tr>
                            <td>Email</td>
                            <td><input type="text" onChange={e =>
                                e.target.value ?
                                    setUpdateUser({ ...updateUser, email: e.target.value }) :
                                    setUpdateUser({ ...updateUser, email: details.email })} /></td>
                        </tr>
                        <tr>
                            <td>Telephone</td>
                            <td><input type="text" onChange={e =>
                                e.target.value ?
                                    setUpdateUser({ ...updateUser, telephone: e.target.value }) :
                                    setUpdateUser({ ...updateUser, telephone: details.telephone })} /></td>
                        </tr>
                    </tbody>
                </table>


                <button onClick={editUser}> Editer le profil </button>
                






            </div>
        </div>
    );
};



export default  EditUser

