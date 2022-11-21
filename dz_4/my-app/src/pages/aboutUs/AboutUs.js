import React, {Component} from 'react';
import Text from "../../components/text/Text";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {text: true}
    }

    hideText = () => {
        this.setState({text: !this.state.text})
    }

    render() {
        return (
            <div>
                {
                    this.state.text === true
                        ?
                        <Text/>
                        :
                        ""
                }
                <button onClick={this.hideText}>кнопка</button>
            </div>
        );
    }
}

export default AboutUs;