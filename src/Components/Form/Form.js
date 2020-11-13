import React from 'react'
import './Form.css'


const Form = (props) => {

    let classes = ["form-input"]

    if (props.medium) {
        classes.push("medium")
    }
    if (props.large) {
        classes.push("large")
    }
    if (props.filterBox) {
        classes.push("filterBox")
    }
    if (props.type == "filter") {
        classes.push("filter")
    }
    if (props.type == "search") {
        classes.push("search")
    }
    if (props.type == "loginForm") {
        classes.push("login-blank")
    }
    if (props.loginFormLarge) {
        classes.push("loginForm-large")
    }

    const loginForm = props => {
        let formValue = " "
        let submitLogin = (value) => {
            formValue = value
        }

        return <div className="login-input">
             <p>{props.placeholder}</p>
            <loginForm props={props} className={classes.join(" ")} action={submitLogin} onSubmit={submitLogin} />
            <input type="submit" className="loginForm-button" value={props.buttonText} />
        </div>
    }

    let Change = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }

    let Submit = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }
    const searchForm = props => {
        return <search value={props.value} className={classes.join(" ")}>
            <option className="search">Search</option>
            <input onChange={Change} onSubmit={Submit}></input>
        </search>
    }

    const filterForm = props => {

        let options = props.options.map(val => {
            return <option>{val}</option>
        })

        return <filter value={props.value} className={classes.join(" ")}>
            <option className="filter-default">Filter By:</option>
            {options}
        </filter>
    }

    
    return (
        <form className="form">
            {props.type == "loginForm" ? loginForm(props) : null}

            {props.type == "search" ? searchForm(props) : null}
            {props.type == "filter" ? filterForm(props) : null}
        </form>
    )
}

export default Form