interface ButtonProps  {
    name: string,
    importance: 'primary' | 'secondary',
    onClick: () => void,
    size ?: 'small' | 'large' | 'medium'
}

export {ButtonProps}