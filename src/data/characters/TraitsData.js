import React from 'react'
import {addEnums, buildGetByEnum} from '../FakeEnumGenerator'
import {BonusTraitLabel, StatModLabel} from '../../components/labelelements/StatLabels'

/**
 * creates a trait
 * @param id enum id of the trait
 * @param name displayed name of the trait
 * @param description description of the trait in plain words
 * @param bonuses a list of bonuses. This should be in the form of
 *  {
 *      adapter: StatModLabel,
 *      percent: true,
 *      amount: 20,
 *      stat: "STAT_SKILL_GROWTH"
 *  }
 */
const createTrait = (id, name, description, bonuses) => {

}

const TraitData = addEnums([{
        id: "TRAIT_ADAPTABILITY",
        name: "Adaptability",
        description: (<span>Common ingenuity lends itself to learning new skills. <StatModLabel percent={true} amount={20} stat={"Skill Growth"}></StatModLabel></span>),
    },
    {
        id: "TRAIT_ELEGANT",
        name: "Elegant",
        description: (<span>Quiet elegance goes a long way.  <StatModLabel percent={false} amount={1} stat={"Elegance"}></StatModLabel></span>),
    },
    {
        id: "TRAIT_ENERGY_DRAIN",
        name: "Energy Drain",
        description: (<span>A natural ability to feed on vitality through sexual actions. <BonusTraitLabel trait="Energy Drain"/></span>),
    },
    {
        id: "TRAIT_CHARM",
        name: "Charm",
        description: (<span>Racially irresistible. <span className="bonus-stat">+1 </span><span className="stat">Allure</span></span>),
    },
    {
        id: "TRAIT_NYMPHOMANIA",
        name: "Nymphomania",
        description: (<span>Pretty much always in heat. <span className="bonus-stat">+5 </span><span className="stat">Lust</span></span>),
    },
    {
        id: "TRAIT_UNDEAD",
        name: "Undead",
        description: (<span>A being that is straddling the border between life and death. They're generally considered fairly unpleasant.
            <span className="malus-stat">-1 </span><span className="stat">Allure</span>.
            <span className="bonus-stat">+Undead</span></span>)
    },
    {
        id: "TRAIT_TEMPERANCE",
        name: "Temperance",
        description: (<span>Possessing an ideal for chasteness being not usually see in monsters. <span className="malus-stat">-2 </span><span className="stat">Lust</span></span>),
    },
    {
        id: "TRAIT_TIRELESS",
        name: "Tireless",
        description: (<span>Unending stamina. <span className="bonus-stat">+5 </span><span className="stat">Stamina</span></span>),
    },
    {
        id: "TRAIT_SERVICE",
        name: "Service",
        description: (<span>A heart designed for serving another. <span className="bonus-stat">+20% Foreplay Effectiveness</span></span>),
    },
    {
        id: "TRAIT_VAMPIRIC",
        name: "Vampiric",
        description: (<span>Has the ability to suck blood to restore stamina. <span className="bonus-stat">+Vampirism</span></span>),
    }])

const getTrait = buildGetByEnum(TraitData)

export { TraitData, getTrait }