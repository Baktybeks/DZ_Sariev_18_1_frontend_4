import React from 'react';

export function WorksList({worksList}) {
    return (
        <ul>
            {
                worksList.length > 0
                    ? worksList.map((work, key) => <li key={key}> {work}</li>)
                    : <li>не данных</li>
            }
        </ul>
    );
}

