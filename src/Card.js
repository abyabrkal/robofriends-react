import React from 'react';


const Card = (props) => {
    return (
        <div className="tc bg-light-blue dib pa3 ma2 grow bw2 shadow-5">
            <img alt='profile' src='https://robohash.org/test?200x200' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;