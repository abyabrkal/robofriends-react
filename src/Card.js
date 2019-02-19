import React from 'react';

const Card = () => {
    return (
        <div className="bg-light-blue dib pa3 ma2 grow bw2 shadow-5">
            <img alt='profile' src='https://robohash.org/test?200x200' />
            <div>
                <h2>Tony Stark</h2>
                <p>tony@stark.com</p>
            </div>
        </div>
    );
}

export default Card;