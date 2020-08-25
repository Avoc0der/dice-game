import React from 'react'
import './Dice.scss'

type DiceProps = {
    face: string
    rolling: boolean
}

const Dice: React.FC<DiceProps> = ({ face, rolling }): JSX.Element => {
    const classes = `dice fas fa-dice-${face} ${rolling && 'shaking'}`

    return (
        <>
            <i className={classes} />
        </>
    )
}

export default Dice
