import React from 'react';
import "./Button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = '';

    let types = ['primary', 'danger', 'success', 'warning', 'default']

    if (types.includes(props.type)) {
        classList += `button-${props.type}`
    }

    if (props.hover) {
        classList += ` button-${props.type}-hover`
    }

    if (props.outline) {
        classList += ` button-${props.type}-outline`
    }

    if (props.faded) {
        classList += ` button-${props.type}-faded`
    }

    console.log(props.large);
    if (props.large) {
        classList += ` button-large`
    }

    if (props.faded) {
        classList += ` button-${props.type}-large`
    }

    if (props.outline) {
        classList += ` button-${props.type}-large`
    }


    return (
        <button className={classList}>
            {props.label}
        </button>
    )

}




export default Button; 