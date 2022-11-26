import React from 'react';

function WorksList({worksList}) {
    return (
        <ul>
            {worksList.length > 0
                ? worksList.map((work, key) => <li key={key}> {work}</li>)
                : <li>нет данных</li>
            }
        </ul>
    );
}

export default WorksList;


