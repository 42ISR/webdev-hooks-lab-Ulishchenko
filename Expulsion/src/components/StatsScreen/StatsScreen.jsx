import StatsSummary from './StatsSummary/StatsSummary'
import ReadingCounter from './ReadingCounter/ReadingCounter'
import './StatsScreen.css'

const StatsScreen = ({books, pagesToday, onDecrease, onIncrease, onReset}) => {
    return (
        <section className="screen active">
            <p className="greeting">Статистика</p>
            <p className="greeting-sub">Как продвигается чтение</p>
            <StatsSummary books={books}/>
            <ReadingCounter pagesToday={pagesToday} onDecrease={onDecrease} onIncrease={onIncrease} onReset={onReset}/>
        </section>
    )
}

export default StatsScreen