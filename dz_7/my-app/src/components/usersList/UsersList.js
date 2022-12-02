import React, {useState} from 'react';
import {Container, Row, Card, Col} from "react-bootstrap";

function UsersList({userList}) {

    const [oneUser, setOneUser] = useState({})

    const getOneUserInfo = (event) => {
        const id = event.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setOneUser(data))
    }
    const emptyObject = !Object.keys(oneUser).length

    return (
        <div className="justify-content-center">
            {
                !emptyObject &&
                <Container className="body">
                    <Row>
                        <Col xl={12} >
                            <Card border="success" style={{width: '100%', margin: "25px"}} key={oneUser.id}>
                                <Card.Header>{oneUser.name}</Card.Header>
                                <Card.Body>
                                    <p>name: {oneUser.name}</p>
                                    <p>email: {oneUser.email}</p>
                                    <p>phone: {oneUser.phone}</p>
                                    <p>company name: {oneUser.company.name}</p>
                                    <p>website: {oneUser.website}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            }

            <Container>
                <Row>
                    {
                        userList.slice(0,6).map(user => (
                                <Col xl={4}>
                                    <Card border="primary" style={{width: '100%', margin: "25px"}} key={user.id}>
                                        <Card.Header>{user.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{user.email}</Card.Title>
                                            <Card.Text>
                                                {user.username}
                                            </Card.Text>
                                            <button
                                                data-id={user.id}
                                                onClick={getOneUserInfo}>get info
                                            </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default UsersList;