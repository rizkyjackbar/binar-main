import React, { Fragment } from "react";

const bgColor ={
    primary : 'blue',
    error : 'red',
    secondary : 'green',
    info : 'yellow'
}

const Button = ({text, onclick, variant}) => {
    return (
        <button style={{backgroundColor: bgColor[variant], color: 'white'}} onclick={onclick}>{text}</button>
    )
}

export default Button