import React, {Component} from 'react';
import {WorksList} from "../../components/worksList/WorksList";

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    getWorks = () => {
        this.setState({works: ["Work1", "Work2"]})
    }

    render() {
        return (
            <>
                <button onClick={this.getWorks}>get</button>
                <WorksList worksList={this.state.works}/>
            </>
        );
    }
}

export default PortfolioPage;