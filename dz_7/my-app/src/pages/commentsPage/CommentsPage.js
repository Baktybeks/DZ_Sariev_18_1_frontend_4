import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

function CommentsPage(props) {
    const [comments, setComments] = useState([])
    const getComments = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => setComments(data))
    }
    useEffect(getComments, [])

    return (
        <div>
            <h1 className="text-center">Comments page</h1>
            <Container>
                <Row>
                    {
                        comments.slice(0, 6).map((comment) => (

                                <Col xl={4}>
                                    <Card style={{width: '100%', marginBottom: "25px"}}>
                                        <Card.Body>
                                            <Card.Title>email: {comment.email}</Card.Title>
                                            <Card.Text>
                                                {comment.body}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        )
                    }
                </Row>
            </Container>
        </div>
    );
}

export default CommentsPage;