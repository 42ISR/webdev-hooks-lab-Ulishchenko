import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import ViewSwitch from './components/ViewSwitch/ViewSwitch'
import ShelfScreen from './components/ShelfScreen/ShelfScreen'
import StatsScreen from './components/StatsScreen/StatsScreen'
import './App.css'

const initialBooks = [
    { id: nanoid(), title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
    { id: nanoid(), title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
    { id: nanoid(), title: 'Пиранези', author: 'Сюзанна Кларк', read: false }
]

function App() {
    const [currentScreen, setCurrentScreen] = useState('shelf')
    const [books, setBooks] = useState(initialBooks)
    const [showOnlyUnread, setShowOnlyUnread] = useState(false)
    const [pagesToday, setPagesToday] = useState(0)

    useEffect(() => {
        document.title = currentScreen === 'shelf' ? 'Shelf — Моя полка' : 'Shelf — Статистика'
    }, [currentScreen])

    const handleAdd = (title) => {
        const newBook = { id: nanoid(), title, author: 'Автор не указан', read: false }
        setBooks(prev => [...prev, newBook])
    }

    const handleToggleRead = (id) => {
        setBooks(prev => prev.map(book => book.id === id ? { ...book, read: !book.read } : book))
    }

    const handleDelete = (id) => {
        setBooks(prev => prev.filter(book => book.id !== id))
    }

    const handleIncrease = () => setPagesToday(prev => prev + 1)
    const handleDecrease = () => setPagesToday(prev => Math.max(0, prev - 1))

    return (
        <div className="app">
            <div className="app-header">
                <div className="brand">
                    <div className="brand-mark">S</div>
                    <div className="brand-name">Shelf</div>
                </div>
                <ViewSwitch currentScreen={currentScreen} onChange={setCurrentScreen}/>
            </div>
            {currentScreen === 'shelf' && (
                <ShelfScreen
                    books={books}
                    showOnlyUnread={showOnlyUnread}
                    onAdd={handleAdd}
                    onFilterChange={e => setShowOnlyUnread(e.target.checked)}
                    onToggleRead={handleToggleRead}
                    onDelete={handleDelete}
                />
            )}
            {currentScreen === 'stats' && (
                <StatsScreen
                    books={books}
                    pagesToday={pagesToday}
                    onDecrease={handleDecrease}
                    onIncrease={handleIncrease}
                    onReset={() => setPagesToday(0)}
                />
            )}
        </div>
    )
}

export default App