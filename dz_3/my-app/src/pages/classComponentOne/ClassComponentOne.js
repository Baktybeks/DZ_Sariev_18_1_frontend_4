import React from 'react';
import classes from "./classComponentOne.module.css";


class ClassComponentOne extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li className={classes.li}>{this.props.user.name}</li>
                <li className={classes.li}>{this.props.user.age}</li>
            </ul>
        )
    }

}

export default ClassComponentOne;