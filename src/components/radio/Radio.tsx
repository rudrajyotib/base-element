import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { RadioProps } from "./RadioProps";

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps) => {

    const [checked, setChecked] = useState(props.defaultSelected ? props.defaultSelected : '')

    const selectFunction: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.value)
        props.onChange(event.target.value)
    }

    const groupStyle: React.CSSProperties = { display: 'flex', flex: 1, flexDirection: 'column' }
    if (props.groupBorder === true){
        groupStyle.border = '1px solid #cbcdcf'
        groupStyle.borderRadius = '0.25em'
    }
    const radioRowStyle: React.CSSProperties = {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingTop: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px'
    }
    if (props.radioBorder === true){
        radioRowStyle.border = '1px solid #cbcdcf'
        radioRowStyle.borderRadius = '0.25em'
    }
    if (props.backgroundColor ){
        radioRowStyle.backgroundColor = props.backgroundColor
    }
    const radioButtonStyle : React.CSSProperties = { display: 'flex', flex: 1, paddingRight: '20px' , justifyContent:'center'}
    const radioOptionStyle : React.CSSProperties = { display: 'flex', flex: 4 }
    if (props.compact && props.compact === true){
        radioOptionStyle.flex = 9
    }

    return (
        <div style={groupStyle}>
            {
                props.data.map((option, index) => <div style={radioRowStyle} key={`radioOption${props.groupId}${index}`}>
                    <div style={radioButtonStyle}><input type='radio'
                        name={props.groupId}
                        id={option.value}
                        key={`radioKey${props.groupId}${index}`}
                        value={option.value}
                        onChange={selectFunction}
                        checked={checked === option.value} /></div>
                    <div style={radioOptionStyle}><span key={`radioLabel${props.groupId}${index}`}>{option.label}</span></div>
                </div>)
            }
        </div>)
}

export { Radio }