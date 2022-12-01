import React from 'react';

function Pagination({postCount, totalPost, paginate}) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPost / postCount); i++) {
        pageNumber.push(i)
    }

    return (
        <div>
            <ul className="pagination justify-content-center">
                {
                    pageNumber.map(number => (
                        <li className="page-item" key={number}>
                            <a href="#!"
                               onClick={() => paginate(number)}
                               className="page-link">{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination;