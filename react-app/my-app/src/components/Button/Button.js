import  React from "react";

const bgColor = {
    primary: 'blue',
    error: 'red',
    secondary: 'green',
    info: 'yellow'
}



const Button = ({text, onClick, variant}) => {
    return (
        <button style={{backgroundColor: bgColor[variant]}} onClick>{text}</button>
    )
}

export default Button;