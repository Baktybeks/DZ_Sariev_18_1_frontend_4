import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Card} from "react-bootstrap";

function PhotosPage(props) {
    const [photos, setPhotos] = useState([])
    const getPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => setPhotos(data))
    }


    useEffect(getPhotos, [])
    return (
        <div>
            <h1 className="text-center">Photos page</h1>
            <Container>
                <Row>
                    {photos.slice(0, 6).map(photo => (
                        <Col xl={4}>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={photo.url}/>
                                <Card.Body>
                                    <Card.Title>{photo.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default PhotosPage;