import React, { useState } from "react"
import { TextInputProps } from "./TextInputProps"


const TextInput = (props: TextInputProps) => {

    const [content, setContent] = useState("")
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
                    if (/^[a-zA-Z]+$/.test(textContent)){
                        validText = true
                    }
                }else if (props.textType === ' numeric'){
                    if (/^[0-9]+$/.test(textContent)){
                        validText = true
                    }
                }else if (props.textType === 'uppercase'){
                    if (/^[a-zA-Z]+$/.test(textContent)){
                        validText = true
                        textContent = textContent.toUpperCase()
                    }
                }else if (props.textType === 'alphanumeric'){
                    if (/^[a-zA-Z0-9]+$/.test(textContent)){
                        validText = true
                    }
                }
                if (validText === true){
                    setContent(textContent)
                    props.onChangeHandler(content)
                }
                
            }}
        />
    </>)
}

export  {TextInput}