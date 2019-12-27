import React from 'react';
import './roundButton.css';

const RoundButton = (props) => {
    const { className, text } = props;
    return (
        <button className={className}>{text}</button>
    )
}

export default RoundButton;