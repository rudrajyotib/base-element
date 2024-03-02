interface TextInputProps {
    placeHolderText: string,
    onChangeHandler: (text: string)=>void,
    textType: 'alphanumeric' | 'alpha' | ' numeric' | 'uppercase',
    name: string
}

export  {TextInputProps}