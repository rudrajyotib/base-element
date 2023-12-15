interface RadioProps{

    data : {value: string, label: string}[],
    groupId: string,
    defaultSelected ?: string,
    onChange : (selected: string) => void

}

export {RadioProps}