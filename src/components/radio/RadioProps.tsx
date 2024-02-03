interface RadioProps{

    data : {value: string, label: string}[],
    groupId: string,
    defaultSelected ?: string,
    onChange : (selected: string) => void,
    groupBorder : boolean,
    radioBorder: boolean,
    compact ?: boolean,
    backgroundColor ?: 'white' | 'blue'

}

export {RadioProps}