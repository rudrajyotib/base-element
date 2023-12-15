interface ButtonProps  {
    name: string,
    importance: 'primary' | 'secondary',
    onClick: () => void
}

export {ButtonProps}