import React, {useState} from "react";
import {Container} from "react-bootstrap";

function ContactsPage() {
    const [input, setInput] = useState("");

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const addInput = () => {
        console.log(input)
        setInput("")
    }
    return (
        <div>
            <Container>
                <input
                    type="text"
                    value={input}
                    onChange={changeInput}
                    placeholder="contact"/>
                <button onClick={addInput}>add</button>
                <button onClick={() => setInput("")}>clear</button>
            </Container>
        </div>
    )
}

export default ContactsPage;