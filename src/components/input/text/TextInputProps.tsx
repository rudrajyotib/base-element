interface TextInputProps {
    placeHolderText: string,
    onChangeHandler: (text: string)=>void,
    textType: 'alphanumeric' | 'alpha' | 'numeric' | 'uppercase' | 'decimal-fraction',
    name: string,
    value: string
}

export  {TextInputProps}