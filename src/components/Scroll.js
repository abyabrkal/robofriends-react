import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid blue', height: '600px', backgroundColor: '#FFFFFF' }}>
            {props.children}
        </div>
    )
};

export default Scroll;