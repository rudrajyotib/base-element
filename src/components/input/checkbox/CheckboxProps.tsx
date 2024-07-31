interface CheckboxProps {
    id: string,
    label: string,
    checked: boolean,
    onCheck: (id:string)=>void,
    onUncheck: (id:string)=>void
}

export type {CheckboxProps}