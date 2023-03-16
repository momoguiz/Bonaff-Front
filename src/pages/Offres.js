import Annonces from "../components/Annonces"

const Offres =() =>{
    return (
        <div className="Offres">
            <Annonces type='Offre'/>
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