
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"


const Offres =({annonce})=>{
    const [data, setData] = useState([])
    const [titreAnnonce, setTitreAnnonce]=useState([])
    //cosnt [searchTerm,setSearchTerm]=useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/annonces')
            .then((res) => setData(res.data))
            console.log(data.categorie)
    }, [])

    return (
        <div>
            <ul> 
                <input type="text"
                 name="serchBar" 
                 placeholder="Que cherchez vous ?" 
                defaultValue={titreAnnonce} onChange={(e) => 
                setTitreAnnonce(e.target.value)} />
            </ul>
            
             <ul>
             {data
                    .map((annonce, index) => (
                        <div></div>
                        //<CarEAQWER    qQ d key={index} annonce={annonce} />
                        
             ))}
             </ul>
        </div>
    )


}
export default Offres



























// const Offres =()=>{
// const [offers, setOffers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [titleSearched, setTitleSearched] = useState("");
//   const [priceMin, setPriceMin] = useState("");
//   const [priceMax, setPriceMax] = useState("");
//   const [sorted, setSorted] = useState("date-desc");

//     const handleChangeSearch = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
    
//         if (name === "titleSearched") {
//           setTitleSearched(value);
//         } else if (name === "priceMin" || name === "priceMax") {
//           if (!isNaN(Number(value))) {
//             if (name === "priceMin") {
//               setPriceMin(value);
//             } else {
//               setPriceMax(value);
//             }
//           }
//         }
//         if (name === "sorted") {
//             setSorted(value);
      
//             const fetchData = async () => {
//               const response = await updateOffers();
      
//               const newOffers = response;
//               setOffers(newOffers);
//             };
//             fetchData();
//           }
//         };



//     return(
//         <div>
//         <h1> Toutes les offres disponibles </h1>
        
//         </div>
//     )
// }
// export default Offres