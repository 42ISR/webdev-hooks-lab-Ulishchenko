import BookForm from './BookForm/BookForm'
import FilterChip from './FilterChip/FilterChip'
import BookList from './BookList/BookList'
import './ShelfScreen.css'

const ShelfScreen = ({books, showOnlyUnread, onAdd, onFilterChange, onToggleRead, onDelete}) => {
    const visibleBooks = showOnlyUnread ? books.filter(book => !book.read) : books
    const count = books.length

    return (
        <section className="screen active">
            <p className="greeting">Добрый вечер</p>
            <p className="greeting-sub">{count === 0 ? 'На полке пока пусто' : `На полке ${count} ${count === 1 ? 'книга' : count >= 2 && count <= 4 ? 'книги' : 'книг'}`}</p>
            <BookForm onAdd={onAdd}/>
            <div className="list-toolbar">
                <span className="toolbar-title">Книги</span>
                <FilterChip checked={showOnlyUnread} onChange={onFilterChange}/>
            </div>
            <BookList books={visibleBooks} onToggleRead={onToggleRead} onDelete={onDelete}/>
        </section>
    )
}

export default ShelfScreen
