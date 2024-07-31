import React, { useState } from "react";
import { CheckboxProps } from "./CheckboxProps";

const CheckboxInput = (props: CheckboxProps) =>{

    const [checkedState, setCheckedState] = useState<boolean>(props.checked)

    return(
        <div>
            <label>
      <input type="checkbox"
        id={props.id}
        defaultChecked={checkedState}
        onChange={() => {
            if (checkedState == true){
                props.onUncheck(props.id)
            }else{
                props.onCheck(props.id)
            }
            setCheckedState((currentState)=>{
                const newState = !currentState
                return newState
            })
        }}
      />
      {props.label}
    </label>
        </div>
    )
}

export {CheckboxInput}