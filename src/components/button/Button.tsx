import React from "react"
import { ButtonProps } from "./ButtonProps"

const Button: React.FunctionComponent<ButtonProps> = (props:ButtonProps) => {

    const buttonStyle: React.CSSProperties = {
        backgroundColor: props.importance === 'primary' ? 'blue' : 'yellow'
    }

    return (
        <input type = "button" onClick={()=>{console.log('I am clicked')}} name="htmlButton" style={buttonStyle} value={props.name}></input>
    )
}

export {Button}