import React from "react"
import { ButtonProps } from "./ButtonProps"

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {

    const buttonStyle: React.CSSProperties = {
        backgroundColor: props.importance === 'primary' ? '#405cf5' : 'white',
        appearance: 'button',
        backfaceVisibility: 'hidden',
        borderRadius: '6px',
        boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0',
        boxSizing: 'border-box',
        color: props.importance==='primary'?'#fff':'#405cf5',
        cursor: 'pointer',
        fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
        fontSize: '100%',
        height: '44px',
        lineHeight: '1.15',
        margin: '12px 0 0',
        outline: 'none',
        overflow: 'hidden',
        padding: '0 25px',
        position: 'relative',
        textAlign: 'center',
        textTransform: 'none',
        transform: 'translateZ(0)',
        transition: 'all .2s,box-shadow .08s ease-in',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        width: '100%',
    }

    return (
        <input type="button" onClick={() => { console.log('I am clicked') }} name="htmlButton" style={buttonStyle} value={props.name}></input>
    )
}

export { Button }