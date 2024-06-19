interface TextInputProps {
    placeHolderText: string,
    onChangeHandler: (text: string)=>void,
    textType: 'alphanumeric' | 'alpha' | 'numeric' | 'uppercase' | 'decimal-fraction' | 'alpha-sentence',
    name: string,
    value: string
}

export  {TextInputProps}