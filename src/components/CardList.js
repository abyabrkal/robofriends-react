import React from 'react';
import Card from './Card';

/* list pl0 mt0 measure */
const CardList = ({ robots }) => {
    return (
        <div class="flex flex-wrap">
            {
                robots.map((user) => {
                    return (<Card   key={user.id} 
                                    id={user.id} 
                                    name={user.name} 
                                    email={user.email}
                            />);
                })
            }
        </div>
    );
}

export default CardList;

        