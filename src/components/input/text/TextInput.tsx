import React, { useState } from "react"
import { TextInputProps } from "./TextInputProps"


const TextInput = (props: TextInputProps) => {

    const [content, setContent] = useState(props.value)
    const textInputStyle: React.CSSProperties = {
        backfaceVisibility: 'hidden',
        borderRadius: '6px',
        boxSizing: 'border-box',
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
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        width: '100%',
    }

    return (
    <>
        <input type="text" 
            style={textInputStyle}
            name={props.name} 
            value={content}
            placeholder={props.placeHolderText}
            onChange={(e)=>{
                var textContent = e.target.value
                let validText = false
                if (props.textType === 'alpha'){       
                    if (textContent === '' || /^[a-zA-Z]+$/.test(textContent)){
                        validText = true
                    }
                }else if (props.textType === 'numeric'){
                   if (textContent === ''  || /^[0-9]+$/.test(textContent)){
                        validText = true
                    }
                }else if (props.textType === 'decimal-fraction'){
                    if (textContent === ''  || /^\d*\.?\d*$/.test(textContent)){
                         validText = true
                     }
                 }else if (props.textType === 'uppercase'){
                    if (textContent === '' || /^[a-zA-Z]+$/.test(textContent)){
                        validText = true
                        textContent = textContent.toUpperCase()
                    }
                }else if (props.textType === 'alphanumeric'){
                    if (textContent === '' || /^[a-zA-Z0-9]+$/.test(textContent)){
                        validText = true
                    }
                }else if (props.textType === 'alpha-sentence'){
                    if (textContent === '' || /^[a-zA-Z0-9 ]+$/.test(textContent)){
                        validText = true
                    }
                }else if (props.textType === 'freetext') {
                    validText = true;
                }
                if (validText === true){
                    setContent(textContent)
                    let passOnText = (props.textType === 'numeric' || props.textType === 'decimal-fraction') && textContent === '' ? '0' : textContent
                    props.onChangeHandler(passOnText)
                }
                
            }}
        />
    </>)
}

export  {TextInput}