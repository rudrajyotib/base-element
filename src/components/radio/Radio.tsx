import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { RadioProps } from "./RadioProps";

const Radio : React.FunctionComponent<RadioProps> = (props: RadioProps) => {

    const [checked, setChecked] = useState(props.defaultSelected ? props.defaultSelected : '')

    const selectFunction :  ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.value)
        props.onChange(event.target.value)
    }

    return (
    <div style={{display:'flex', flex:1, flexDirection:'column'}}>
        {
            props.data.map((option, index) => <div style={{display:'flex', flex:1, flexDirection:'row', paddingTop:'5px',
            justifyContent:'center', alignItems:'center',
            marginTop:'5px', border:'1px solid #cbcdcf', borderRadius:'0.25em'}} key={`radioOption${props.groupId}${index}`}>
                    <div style={{display:'flex', flex:1, paddingRight:'20px'}}><input type='radio' 
                        name={props.groupId} 
                        id={option.value} 
                        key={`radioKey${props.groupId}${index}`} 
                        value={option.value} 
                        onChange={selectFunction}
                        checked={checked===option.value}/></div>
                    <div style={{display:'flex', flex:4}}><span key={`radioLabel${props.groupId}${index}`}>{option.label}</span></div>
            </div>)
        }
    </div>)
}

export {Radio}