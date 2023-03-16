import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "../pages/home.css"


const Home = () => {
    const [data, setData] = useState([])
    const [searchRecherche, setSearchRecherche] = useState("")
    const [filtreCategorie, setFiltreCategorie] = useState("")
    const [filtreRegion, setfiltreRegion] = useState("")
    const [filterAnnonce, setFilterAnnonce] = useState("")
    useEffect(() => {
        console.log(localStorage.usertoken)
        axios.get('http://localhost:8000/annonces')
            .then((res) => setData(res.data))
    
    }, [])
    
    const handleRecherche = (e) => {
     
        e.target.value ? setSearchRecherche(e.target.value) : setSearchRecherche('')
    }

    const handleCategorie = (e) => {
        e.target.value ? setFiltreCategorie(e.target.value) : setFiltreCategorie('')
    }

    const handleRegion = (e) => {
        e.target.value ? setfiltreRegion(e.target.value) : setfiltreRegion('')
    }

    useEffect(() => {
        setFilterAnnonce(data
            .filter((val) => {
                return filtreCategorie ? val.categorie.includes(filtreCategorie) : val
            })
            .filter((val, index) => {

                return searchRecherche ? val.titre.toLowerCase().includes(searchRecherche.toLowerCase()) :
                    val
            })
            .filter((val) => {

                return filtreRegion ? val.region.includes(filtreRegion) : val

            })
        )
    }, [data, filtreCategorie, filtreRegion, searchRecherche])


    return (

        <div>


            <ul>
                <li>
                    <select
                        className="select-region"
                        name="region"
                        onChange={handleRegion}
                    >

                        <option value="">Selectionner Votre Region </option>
                        <option value="Région Boké">Région Boké</option>
                        <option value="Région Conakry">Région Conakry</option>
                        <option value="Région Faranah">Région Faranah</option>
                        <option value="Région Kankan">Région Kankan</option>
                        <option value="Région Kindia">Région Kindia</option>
                        <option value="Région Labé">Région Labé</option>
                        <option value="Région Mamou">Région Mamou</option>
                        <option value="Région N'Zérékoré">Région N'Zérékoré</option>
                    </select> <br />
                </li>
                <li>
                    <select
                        className="select-categorie"
                        name="categorie"
                        onChange={handleCategorie} >
                        <option value="">Selectionner la Categorie </option>
                        <option value="Multimédia">Multimédia</option>
                        <option value="Maison">Maison</option>
                        <option value="Mode">Mode</option>
                        <option value="Empoi">Empoi</option>
                        <option value="Immobilier">Immobilier</option>
                        <option value="Véhicule">Véhicule</option>
                        <option value="Autres">Autres</option>
                    </select> <br />
                </li>
                <li>
                    <div className="searchBar">
                        <input type="text"
                            name="searchBar"
                            id="searchBar"
                            placeholder="Que cherchez vous ?"
                            onChange={handleRecherche} />
                    </div>
                </li>
                <div>
                    <div className="search_result">
                        {

                            filterAnnonce && filterAnnonce.map((val, index) => {
                                return <div className="search_result" key={index}>
                                    <Link to={`/annonces/${val._id}`}>
                                         <img width={'200px'} src={`http://localhost:8000${val.image}`} alt={val.titre} />
                                        <p> {val.titre}</p>

                                    </Link>
                                    {/* <img width={'200px'} src={`http://localhost:8000${val.image}`} />
                                    {val.titre} */}

                                </div>
                            })}


                    </div>
                </div>
            </ul>
        </div>
    )
}
export default Home