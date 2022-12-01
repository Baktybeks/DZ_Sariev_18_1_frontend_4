import React from 'react';
import {Card, Col} from "react-bootstrap";

function Post({posts, loading}) {

    if (loading) {
        return <h2>loading...</h2>
    }

    return (
        <>{
            posts.map((post) => (
                    <Col xl={4}>
                        <Card style={{width: '100%', marginBottom: "25px"}}>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.id}=>{post.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            )
        }
        </>
    )
}


export default Post;