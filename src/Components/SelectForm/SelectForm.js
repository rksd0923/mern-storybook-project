import React from 'react'
import './SelectForm.css'

const SelectForm = (props) => {

    let classes = ["form-input"]

    if (props.medium) {
        classes.push("medium")
    }
    if (props.large) {
        classes.push("large")
    }

    if (props.selectBox) {
        classes.push("selectBox")
    }
    if (props.type == "select") {
        classes.push("select")


        // let Change = (evt) => {
        //     this.setState({
        //         value: evt.target.value
        //     })
        // }

        // let Submit = (evt) => {
        //     this.setState({
        //         value: evt.target.value
        //     })
        // }
        // }

        const select = props => {

            let options = props.options.map(val => {
                return <option>{val}</option>
            })

            return <select value={props.value} className={classes.join(" ")}>
                <option className="select-default">Select</option>
                {options}
            </select>
        }

        return (
            <form className="form">
                {props.type == "select" ? select(props) : null}
            </form>
        )
    }
}
export default SelectForm