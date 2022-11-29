import React, {useState} from 'react';

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
        <ul>
            {
                !emptyObject &&
                <li className='li' key={oneUser.id}>
                    <p>---------------------------------</p>
                    <p>name: {oneUser.name}</p>
                    <p>email: {oneUser.email}</p>
                    <p>phone: {oneUser.phone}</p>
                    <p>company name: {oneUser.company.name}</p>
                    <p>website: {oneUser.website}</p>
                    <p>---------------------------------</p>
                </li>
            }
            {
                userList.map(user =>
                    <li key={user.id}>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>username: {user.username}</p>
                        <button
                            data-id={user.id}
                            onClick={getOneUserInfo}>get info
                        </button>
                    </li>
                )
            }
        </ul>
    );
}
export default UsersList;