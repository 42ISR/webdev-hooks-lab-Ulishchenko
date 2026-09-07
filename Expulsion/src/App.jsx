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

return (        
<div class="app">

  <div class="app-header">
    <div class="brand">
      <div class="brand-mark">S</div>
      <div class="brand-name">Shelf</div>
    </div>
    <div class="view-switch">
      <button class="view-btn active" data-screen="shelf">Моя полка</button>
      <button class="view-btn" data-screen="stats">Статистика</button>
    </div>
  </div>
    )
}

export default App