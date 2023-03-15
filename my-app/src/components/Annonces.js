import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"




const Annonces = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue]=useState(36)
    const [categories, setCategories]=useState([])
    const [seletecdRadio,setSeletecdRadio]=useState(" ")
    const radioRegion = ['Région Boké', 'Région Conakry', 'Région Faranah', 'Région Kankan', 'Région_Kindia', 'Région Labé', 'Région Mamou', "Région N'Zérékoré",]
      //console.log(radioRegion)

    
  useEffect(() => {
        axios.get('http://localhost:8000/annonces')
            .then((res) => setData(res.data))
            console.log(data.categorie)
    }, [])
    
    return (

        
        <div className="annonces">


            {/* <ul className="sech_bar">
            
          </ul> */}
            {/* <h1> Toutes les Annonces </h1> */}
            
             {/* {radioRegion.map((region) => {
                <li> 
            <input type="radio" id={region} name={region}/>
            <label htmlFor={region}> </label>
                </li>
             })} */}
            
             {/* pour afficher le tableu dans imput de type radio */}
          {/* {radioRegion.map((region) => {
            <li> <input type="radio" id={region}  name="radiocontinent" onChange={(e) =>setSeletecdRadio(e.target.value) }/>
            <label htmlFor={region}> {region} </label> </li>
          })} */}


             <ul className="radio-container">
            <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
            </ul>
            <ul>
                {/* pour afficher que 5 element dans le tableau
                    {data
                    .slice(0, 5).map((annonce, index) => (
                        // <li> {annonce.titre}</li>
                    <Card key={index} annonce={annonce} /> 

                    ))} */}

                {data
                    .slice(0, rangeValue).map((annonce, index) => (
                        <Card key={index} annonce={annonce} />
             ))}

            </ul>

        </div>
    )
}
export default Annonces