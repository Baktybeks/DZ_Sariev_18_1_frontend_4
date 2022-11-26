import React, {useState} from 'react';
import WorksList from "../../components/worksList/WorksList";

function PortfolioPage() {
    const [works, setWorks] = useState([]);

    const getWorks = () => {
        setWorks(["Work1", "Work2"])
    }
    return (
        <>
            <button onClick={getWorks}>кнопка</button>
            <WorksList worksList={works}/>
        </>
    );
}

export default PortfolioPage;