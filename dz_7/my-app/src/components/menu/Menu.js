import React from 'react';
import {NavLink} from "react-router-dom";

function Menu(props) {
    const menuNames =
        [
            {
                name: "posts",
                url: "/"
            },
            {
                name: "comments",
                url: "/comments"
            },
            {
                name: "photos",
                url: "/photos"
            },
            {
                name: "users",
                url: "/users"
            },
            {
                name: "contacts",
                url: "/contacts"
            }
        ]

    return (
        <div className="container" style={{width: '100%', margin: "25px"}} xl={4}>
            <div className="row">
                <ul className="menu">
                    {
                        menuNames.map((menuName, index) =>
                            <li key={index}>
                                <NavLink
                                    to={menuName.url}
                                    className={({isActive}) =>
                                        isActive ? "active" : ""}
                                >
                                    {menuName.name}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;