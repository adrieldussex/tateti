export const Square = ({children, updateBoard, isSelected, index}) => {
    const className = `text-2xl bg-blue-300 w-40 h-40 flex items-center justify-center ${isSelected ? 'bg-red-500' : ''}`
    
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}