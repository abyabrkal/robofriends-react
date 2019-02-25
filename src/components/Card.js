import React from 'react';
import './Card.css'


const Card = ({ id, name, email }) => {
    return (
        <div className="lh-copy pa3 ph0-l mycard ma3 grow w-30 flex flex-row items-center">
            <img className="w2 h2 w3-ns h3-ns br-100 ml3" src={`https://robohash.org/${id}?250x250`} alt="profile pic" />
            <div className="pl2 flex-auto">
                <h2 className="f4 fw5 db black-70">{name}</h2>
                <span className="f6 db black-70">{email}</span>
                <a href="tel:" className="ml3 pa3 f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
            </div>
            <div>
                <a class="f6 link dim br1 ph1 pv1 mb2 mr3 db white bg-dark-red" href="#0">Status1</a>
                <a class="f6 link dim br1 ph1 pv1 mb2 mr3 db white bg-orange" href="#0">Status2</a>
                <a class="f6 link dim br1 ph1 pv1 mb2 mr3 db white bg-green" href="#0">Status3</a>
            </div>
        </div>
    );
}

export default Card;
