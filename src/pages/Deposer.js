import axios from "axios"
import { useState } from "react"
import '../pages/deposer.css'

function Deposer() {

    const [titreNowAnnonce, setTitreNowAnnonce] = useState('')
    const [categorieNowAnnonce, setCategorieNowAnnonce] = useState('')
    const [descriptionNowAnnonce, setDescriptionNowAnnonce] = useState('')
    const [prixNowAnnonce, setPrixNowAnnonce] = useState(null)
    const [imageNowAnnonce, setImageNowAnnonce] = useState(null)
    const [annonceNowAnnonce, setAnnonceNowAnnonce] = useState(null)
    const [regionNowAnnonce, setRegionNowAnnonce] = useState(null)
    const [villeNowAnnonce, setVilleNowAnnonce] = useState(null)
   
    const [data, setData] = useState(null)


    const creerAnnonce = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('titre', titreNowAnnonce)
        formData.append('image', imageNowAnnonce)
        formData.append('description', descriptionNowAnnonce)
        formData.append('prix', prixNowAnnonce)
        formData.append('annonce', annonceNowAnnonce)
        formData.append('region', regionNowAnnonce)
        formData.append('ville', villeNowAnnonce)
        formData.append('categorie', categorieNowAnnonce)
        
        
        
        axios.post('http://localhost:8000/annonces', formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'auth-token':localStorage.usertoken
            }
        })
            .then(response => {
                console.log(response.data.image)
                setData(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="deposer">
        <h1 className="h1-form">Formulaire de Depot d'Annonce</h1>
        <div className="form-deposer">
            
         <div className="form-content">
            <form onSubmit={creerAnnonce}>
                
                <label forhtml="titre" className="label-input"> Titre:
                    <input
                        className="input"
                        type='text'
                        value={titreNowAnnonce}
                        placeholder="Le Titre de Votre"
                        onChange={(e) => setTitreNowAnnonce(e.target.value)} />
                </label> <br />
                <label forhtml="prix" className="label-input"> Prix:
                    <input 
                    className="input"
                    type='Number'
                        value={prixNowAnnonce}
                        placeholder="Le Prix de Votre"
                        onChange={(e) => setPrixNowAnnonce(e.target.value)} />
                </label> <br />
                <label forhtml="Categorie" className="label-input">
                    Catégorie:
                </label>
                <select
                    className="select-categorie"
                    name="categorie"
                    onChange={(e) => setCategorieNowAnnonce(e.target.value)} >
                    <option selected>Selectionner la Categorie de Votre Annonce</option>
                    <option value="Multimédia">Multimédia</option>
                    <option value="Maison">Maison</option>
                    <option value="Mode">Mode</option>
                    <option value="Empoi">Empoi</option>
                    <option value="Maison">Maison</option>
                    <option value="Immobilier">Immobilier</option>
                    <option value="Véhicule">Véhicule</option>
                    <option value="Autres">Autres</option>
                </select> <br />
                <select
                    className="select-annonce"
                    name="annonce"
                    onChange={(e) => setAnnonceNowAnnonce(e.target.value)} >
                    <option selected>C'est une Offre ou une Demande ?</option>
                    <option value="Offre">Offre</option>
                    <option value="Demande">Demande</option>
                </select> <br />
                <select
                    className="select-region"
                    name="region"
                    onChange={(e) => setRegionNowAnnonce(e.target.value)} >
                    <option selected>Selectionner Votre Region </option>
                    <option value="Région Boké">Région Boké</option>
                    <option value="Région Conakry">Région Conakry</option>
                    <option value="Région Faranah">Région Faranah</option>
                    <option value="Région Kankan">Région Kankan</option>
                    <option value="Région Kindia">Région Kindia</option>
                    <option value="Région Labé">Région Labé</option>
                    <option value="Région Mamou">Région Mamou</option>
                    <option value="Région N'Zérékoré">Région N'Zérékoré</option>
                </select> <br />
                <select
                    className="select-ville"
                    name="ville"
                    onChange={(e) => setVilleNowAnnonce(e.target.value)} >
                    <option selected>Selectionner Votre Ville</option>
                    <option value="Beyla">Beyla</option>
                    <option value="Boffa">Boffa</option>
                    <option value="Boké">Boké</option>
                    <option value="Conakry">Conakry</option>
                    <option value="Dabola">Dabola</option>
                    <option value="Dinguiraye">Dinguiraye</option>
                    <option value="Faranah">Faranah</option>
                    <option value="Forecariah">Forecariah</option>
                    <option value="Gaoual">Gaoual</option>
                    <option value="Gueckedou">Gueckedou</option>
                    <option value="Kamsar">Kamsar</option>
                    <option value="Kankan">Kankan</option>
                    <option value="Koulaboui">Koulaboui</option>
                    <option value="Kérouane">Kérouane</option>
                    <option value="Kindia">Kindia</option>
                    <option value="Kissidougou">Kissidougou</option>
                    <option value="Koundara">Koundara</option>
                    <option value="Kouroussa">Kouroussa</option>
                    <option value="Labé">Labé</option>
                    <option value="Lélouma">Lélouma</option>
                    <option value="Boffa">Boffa</option>
                    <option value="Lola">Lola</option>
                    <option value="Mali">Mali</option>
                    <option value="Macenta">Macenta</option>
                    <option value="Mamou">Mamou</option>
                    <option value="Mandiana">Mandiana</option>
                    <option value="N'Zérékoré">N'Zérékoré</option>
                    <option value="Pita">Pita</option>
                    <option value="Sangaredi">Sangaredi</option>
                    <option value="Siguiri">Siguiri</option>
                    <option value="Télimélé">Télimélé</option>
                    <option value="Timbi Madina">Timbi Madina</option>
                    <option value="Tougué">Tougué</option>
                    <option value="Kouroussa">Kouroussa</option>
                    <option value="Yomou">Yomou</option>
                    <option value="Youkounkoun">Youkounkoun</option>
                    <option value="Annexes">Annexes</option>

                </select><br />
                <input type='file' onChange={(e) => setImageNowAnnonce(e.target.files[0])} /> <br />
                <label className="label-input"> Description </label>  <br />
                <textarea
                    className="description"
                    placeholder="Décrivez Votre Annonce Ici"
                    id="description"
                    cols="50"
                    rows="30"
                    name="message"
                    onChange={(e) => setDescriptionNowAnnonce(e.target.value)}
                ></textarea>
                {/* <button type='submit'>
                    Submit
                </button> */}
                 <div className="input-checkbox">
                <label className="label-input">
            <input type="checkbox" /> En cochant cette case, j'accepte de
            les conditions d'utilisation du site.
          </label> </div>

          <button className="button-contact" type="Submit">
          Envoyer Votre Creation d'Annonce
          </button>
            </form>
            </div>

            {data && (
                <>
                    <img width={'200px'} src={`http://localhost:8000${data.image}`} alt={data.titre}/>
                    <h2>{data.titre}</h2>
                    <p>{data.prix}</p>
                </>
            )}

        </div> 
        </div> );
}

export default Deposer;



