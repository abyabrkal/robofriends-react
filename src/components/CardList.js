import React from 'react';
import Card from './Card';

/* list pl0 mt0 measure */
const CardList = ({ robots }) => {
    return (
        <ul class="list flex flex-column flex-wrap items-start justify-center"> 
            {
                robots.map((user) => {
                    return (<Card   key={user.id} 
                                    id={user.id} 
                                    name={user.name} 
                                    email={user.email}
                            />);
                })
            }
        </ul>
    );
}

export default CardList;