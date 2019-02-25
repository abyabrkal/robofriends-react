import React from 'react';
import './Card.css'


const Card = ({ id, name, email }) => {
    return (
        <div className="lh-copy pa3 ph0-l mycard ma3 grow w-30">
            <img className="w2 h2 w3-ns h3-ns br-100" src={`https://robohash.org/${id}?200x200`} alt="profile pic" />
            <div className="pl3 flex-auto">
                <span className="f6 db black-70">{name}</span>
                <span className="f6 db black-70">{email}</span>
            </div>
            <div>
                <a href="tel:" className="ml3 pa3 f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
            </div>
        </div>
    );
}

export default Card;
