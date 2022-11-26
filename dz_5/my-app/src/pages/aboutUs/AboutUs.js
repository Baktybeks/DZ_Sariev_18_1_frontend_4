import React, {useState} from "react";
import Text from "../../components/text/Text";

function AboutUs() {
    const [text, setText] = useState(true);

    const hideText = () => {
        setText(!text)
    }


    return (
        <>
            {
                text === true
                    ?
                    <Text/>
                    :
                    ""
            }

            <button onClick={hideText}>кнопка</button>
        </>
    )
}

export default AboutUs;