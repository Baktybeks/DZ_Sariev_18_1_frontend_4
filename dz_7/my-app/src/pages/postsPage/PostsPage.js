import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import Post from "../../components/post/Post";
import Pagination from "../../components/post/Pagination";

function PostsPage(props) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postCount] = useState(6)


    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
    }

    useEffect(getPosts, [])

    const lastPostIndex = currentPage * postCount
    const firstPostIndex = lastPostIndex - postCount
    const currentPost = posts.slice(firstPostIndex, lastPostIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)


    return (
        <div>
            <h1 className="text-center">Posts page</h1>

            <Container>
                <Row>
                    <Post posts={currentPost} loading={loading}/>
                </Row>
            </Container>
            <Pagination
                postCount={postCount}
                totalPost={posts.length}
                paginate={paginate}
            />
            <div className="text-center">
                <button className="btn btn-primary " onClick={prevPage}>Prev page</button>
                <button className="btn btn-primary ms-2 " onClick={nextPage}>Next page</button>
            </div>
        </div>
    )
}

export default PostsPage;
