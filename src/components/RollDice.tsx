import React from 'react'
import Dice from './Dice'

import './RollDice.scss'

const RollDice: React.FC = (): JSX.Element => {
    const [dice1, setDice1] = React.useState<string>('one')
    const [dice2, setDice2] = React.useState<string>('one')
    const [rolling, setRolling] = React.useState<boolean>(false)

    const diceNumber: string[] = ['one', 'two', 'three', 'four', 'five', 'six']

    const roll = (): void => {
        const newDice1 =
            diceNumber[Math.floor(Math.random() * diceNumber.length)]
        const newDice2 =
            diceNumber[Math.floor(Math.random() * diceNumber.length)]
        setDice1(newDice1)
        setDice2(newDice2)
        setRolling(true)
        setTimeout(() => {
            setRolling(false)
        }, 1000)
    }

    return (
        <div className="roll-dice">
            <div className="roll-dice-container">
                <Dice face={dice1} rolling={rolling} />
                <Dice face={dice2} rolling={rolling} />
            </div>
            <button
                disabled={rolling}
                className="roll-dice-btn"
                type="button"
                onClick={roll}
            >
                {rolling ? 'Rolling...' : 'Roll Dice!'}
            </button>
        </div>
    )
}

export default RollDice
