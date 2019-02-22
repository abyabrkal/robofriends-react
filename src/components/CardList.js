import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <ul class="list pl0 mt0 measure center">
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