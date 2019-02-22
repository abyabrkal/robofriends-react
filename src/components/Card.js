import React from 'react';
import './Card.css'


const Card = ({ id, name, email }) => {
    return (
        <li
            className="flex items-center lh-copy pa3 ph0-l mycard ma3 grow">
            <img className="w2 h2 w3-ns h3-ns br-100" src={`https://robohash.org/${id}?200x200`} alt="profile pic" />
            <div className="pl3 flex-auto">
                <span className="f6 db black-70">{name}</span>
                <span className="f6 db black-70">{email}</span>
            </div>
            <div>
                <a href="tel:" className="ml3 pa3 f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
            </div>
        </li>
    );
}

export default Card;

// transition: .4s background linear;

// <div className="tc bg-light-blue dib pa3 ma2 grow bw2 shadow-5 br1">
//             <img alt='profile' src={`https://robohash.org/${id}?200x200`} />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>



  /* <article className="mw8 w8 h7 center bg-white dib ba ma5 pa1 pa4-ns grow shadow-5 br1 mycard">
            <div className="tc">
                <img src={`https://robohash.org/${id}?200x200`} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="profile pic" />
                <h2 className="f3 mb0">{name.split(' ')[1]}</h2>
                <p className="f5 fw4 gray mt0">{email}</p>
            </div>
        </article> */