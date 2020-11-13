import React from 'react';
import "./Input.css"

// This is a functional component - just sent up a little differently as an arrow function!
//const Input = (props) => {


//return (

//


//)

//}

const Input = (props) => {
    let classList = '';

    let types = ['first', 'second', 'third']

    if (types.includes(props.type)) {
        classList += `input-${props.type}`
    }

    if (props.small) {
        classList += ` input-${props.type}-small`
    }

    if (props.medium) {
        classList += ` input-${props.type}-medium`
    }

    if (props.large) {
        classList += ` input-${props.type}-large`
    }




    return (


        //<div>
        //<p>{props.text}</p>    
        //<input placeholder={props.placeholder}/>
        //</div>

        <div>
            <p>{props.text}</p>
            <input className={classList} placeholder={props.placeholder} label={props.label} />
        </div>


    )

}







export default Input; 