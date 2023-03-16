import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
import '../components/annonces.css'


const Annonces = ({ type }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/annonces')
            .then((res) => setData(res.data))

    }, [])
    console.log(data)
    return (
        <div className="annonces">
            {data
                .map((element, index) => {
                    return (
                        element.annonce === type &&
                        <Card key={index} propsannonce={element} />
                    )
                })}
        </div>
    )
}
export default Annonces