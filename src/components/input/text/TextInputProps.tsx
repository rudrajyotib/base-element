interface TextInputProps {
    placeHolderText: string,
    onChangeHandler: (text: string)=>void,
    textType: 'alphanumeric' | 'alpha' | 'numeric' | 'uppercase' | 'decimal-fraction' | 'alpha-sentence' | 'freetext',
    name: string,
    value: string
}

export  {TextInputProps}