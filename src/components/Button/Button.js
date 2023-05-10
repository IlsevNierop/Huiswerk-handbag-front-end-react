import React from 'react';

function Button({buttonType, children, isDisabled, buttonClickHandler}) {
    return (
        <button
            type = { buttonType }
            disabled={ isDisabled }
            onClick ={buttonClickHandler}>
            { children }
        </button>
    );
}

export default Button;