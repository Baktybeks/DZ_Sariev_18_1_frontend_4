import React from 'react';
import classes from "./classComponentTwo.module.css"
class ClassComponentTwo extends React.Component {
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

export default ClassComponentTwo;