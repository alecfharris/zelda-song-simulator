import React from 'react';
import './cButton.css';

const CButton = (props) => {
    const { buttonClassName, arrowClassName } = props;
    return (
        <button className={buttonClassName}><div className={`arrow ${arrowClassName}`} /></button>
    )
}

export default CButton;