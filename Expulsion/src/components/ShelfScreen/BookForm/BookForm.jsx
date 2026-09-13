import { useState } from 'react'
import Input from './Input/Input'
import Button from './Button/Button'
import './BookForm.css'

const BookForm = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const handleAdd = () => {
        const newTitle = title.trim()
        if (!newTitle) return
        onAdd(newTitle)
        setTitle('')
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleAdd()
    }
    return (
        <div className="add-book-row">
            <Input value={title} onChange={e => setTitle(e.target.value)} onKeyDown={handleKeyDown} placeholder="Название книги..." />
            <Button onClick={handleAdd}>Добавить на полку</Button>
        </div>
    )
}



export default BookForm
