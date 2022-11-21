import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    changeInput = (e) => {
        this.setState({input: e.target.value})
    }

    addProduct = () => {
        console.log(this.state)
        this.setState({input: ""})
    }

    render() {
        return (
            <>
                <input type="text"
                       value={this.state.input}
                       onChange={this.changeInput}
                       placeholder="contact"/>
                <button onClick={this.addProduct}>add</button>
                <button onClick={() => this.setState({input: ""})}>clear</button>
            </>
        );
    }
}

export default ContactsPage;