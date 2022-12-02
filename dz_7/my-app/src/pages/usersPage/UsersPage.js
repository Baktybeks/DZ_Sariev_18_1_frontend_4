import React, {useEffect, useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {
    const [users,setUsers] = useState([])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    useEffect(getUsers,[])
    return (
        <>
            <h1 className="text-center">Users list</h1>
            <UsersList userList={users}/>
        </>
    );
}

export default UsersPage;