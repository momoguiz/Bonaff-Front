

const Card =({annonce})=>{
    console.log(annonce)
    return(
        <li className="card">
         <ul> {annonce.description}</ul>
            {/* <img src={annonce.image} alt={"image de l'annonce" + annonce.image} /> */}
         
         <div className="infos">
         <h2> {annonce.titre} </h2>
         <h2>
        {/* Nom du pays  */}
      {/* titre de l'annonce */}
         </h2>

         </div>
        </li>
    )
}
export default Card