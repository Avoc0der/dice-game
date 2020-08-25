import React from 'react'
import './App.scss'
import RollDice from './components/RollDice'

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <RollDice />
        </div>
    )
}

export default App
