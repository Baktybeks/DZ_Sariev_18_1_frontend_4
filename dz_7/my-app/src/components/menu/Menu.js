import React from 'react';
import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    posts
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/button"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    buttons
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/main"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    main
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;