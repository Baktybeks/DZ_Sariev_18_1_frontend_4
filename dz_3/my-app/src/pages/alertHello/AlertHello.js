import React from 'react';

function AlertHello(props) {
    const sayHello = () => {
        alert("Hello world")
    }

    return (
        <>
            <button onClick={sayHello}>say hello</button>

        </>
    );
}

export default AlertHello;