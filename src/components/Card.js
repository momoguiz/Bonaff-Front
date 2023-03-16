import Card from 'react-bootstrap/Card';
import '../components/card.css'

const CardAnnonce = ({ propsannonce }) => {
    return (
        <div>
            
            <ul>
            <Card style={{ width: '15rem' }}>
                <li><img width={'200px'} src={`http://localhost:8000${propsannonce.image}`} alt={`image  ${propsannonce.titre}`} /> </li>
                <Card.Body>
                    <Card.Title> <p>{propsannonce.titre}</p></Card.Title>
                    <Card.Text>
                        <p>{propsannonce.description}</p>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card > </ul>
        </div>
    )
}
export default CardAnnonce







