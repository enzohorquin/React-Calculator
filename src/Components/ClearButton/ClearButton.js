import React from 'react';

import './ClearButton.css'; 

export const ClearButton = ( props ) => {

    return (
    <div className="button" onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>); 
}

export default ClearButton;