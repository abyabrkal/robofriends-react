import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ border: '5px solid whitesmoke', backgroundColor: '#FFFFFF', margin:'1.5em' }}>
            {props.children}
        </div>
    )
};

export default Scroll;

