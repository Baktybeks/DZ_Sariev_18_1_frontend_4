import React, {useState} from "react";

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
        <>
            <input
                type="text"
                value={input}
                onChange={changeInput}
                placeholder="contact"/>
            <button onClick={addInput}>add</button>
            <button onClick={() => setInput("")}>clear</button>
        </>
    )
}

export default ContactsPage;