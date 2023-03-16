import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const AnnonceDetails = () => {

  const [annonceDetail,setannonceDetail]=useState([])
  const {id} = useParams()
  console.log(annonceDetail)
useEffect(() =>{
  axios.get(`http://localhost:8000/annonces/${id}`)
  .then((res) => setannonceDetail(res.data))
  
}, [id])


    

  return (
    <div>
      <img width={'200px'} src={`http://localhost:8000${annonceDetail.image}`} />
      <h1> {annonceDetail.titre}</h1>
      <h2> {annonceDetail.prix}</h2>
      <h2> {annonceDetail.categorie}</h2>
      <h3> {annonceDetail.description}</h3>
      <h3> {annonceDetail.region}</h3>
      <h3> {annonceDetail.ville}</h3>

    </div>
  )
}
export default AnnonceDetails
