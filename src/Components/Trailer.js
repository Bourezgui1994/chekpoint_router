import React from 'react'
import { Card } from "react-bootstrap";

const Trailer = ({movie}) => {
    return (
        <div>
        <Card className="text-center">
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.trailer}
                    <hr />
                    <h5> Top Movie</h5>
                    <p>{movie.description}</p>
                    <hr/>
                    <h6> Rating : {movie.rating} </h6>
                </Card.Text>
                </Card.Body>
        </Card>
        </div>
    )
}

export default Trailer
