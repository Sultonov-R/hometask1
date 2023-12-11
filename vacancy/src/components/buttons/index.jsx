import React from "react";
import './index.css';

const Button = function(props) {

    let {title, classes} = props;
    classes += ' button';
    return(
        <>
        <button className={classes}>{title}</button>
        </>
    )
}

export default Button;