import { useParams } from "react-router"
import { useState,useEffect } from "react"
import apiBeers from "../../../services/Api.service"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"


const BearsDetails =()=>{

    const [beers, setBeers] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        loadBeers()
    }, [beers])

    const loadBeers = () => {

        apiBeers
            .getOneBeer(id)
            .then(({ data }) =>setBeers(data))
            .catch(err => console.log(err))
    }


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={beers.image_url} />
        <Card.Body>
          <Card.Title>{beers.name}</Card.Title>
          <Card.Text>
          tagline:{beers.tagline}
          </Card.Text>
          <Card.Text>
          contributed_by:{beers.contributed_by}
          </Card.Text>
          <Link to={`/`}>ver a inicio</Link>
        </Card.Body>
      </Card>
    )
 
}

export default BearsDetails