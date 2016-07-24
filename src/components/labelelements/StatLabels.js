import React from 'react'

const StatModLabel = ({stat, amount, percent=false}) => {
    // just in case floating point fucks us over
    var displayedAmount = percent ? Math.abs(amount) + "%" : Math.abs(amount)
    if (Math.abs(amount) < 0.001) {
        return (<span/>)
    } else if (amount > 0) {
        return (<span><span className="bonus-stat">+{displayedAmount}</span> <span className="stat">{stat}</span></span>)
    } else {
        return (<span><span className="malus-stat">-{displayedAmount}</span> <span className="stat">{stat}</span></span>)
    }
}

const BonusTraitLabel = ({trait}) => {
    return (<span><span className="bonus-stat">+{trait}</span></span>)
}

const RemovedTraitLabel = ({trait}) => {
    return (<span><span className="malus-stat">-{trait}</span></span>)
}

export {StatModLabel, BonusTraitLabel, RemovedTraitLabel}