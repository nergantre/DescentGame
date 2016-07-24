import { buildGetByEnum, addEnums} from '../FakeEnumGenerator'

const RaceData = addEnums([{
    id: "RACE_HUMAN",
    name: "Human",
    description: "The main race of the Lamont empire. Average all around, with no real strengths or weaknesses.",
    racial_traits: ["TRAIT_ADAPTABILITY"],
},
{
    id: "RACE_ELF",
    name: "Elf",
    description: "A dignified monster with a nature affinity. Tends to have great affinity for nature.",
    racial_traits: ["TRAIT_ELEGANCE"],
},
{
    id: "RACE_SUCCUBUS",
    name: "Succubus",
    description: "A demonic monster that embodies lust. Weak physically, but great at seduction.",
    racial_traits: ["TRAIT_ENERGY_DRAIN", "TRAIT_CHARM"],
},
{
    id: "RACE_LAMIA",
    name: "Lamia",
    description: "A exotic monster with a woman's torso and a snake's tail. They have an aggressive personality and the charm to back it up.",
    racial_traits: ["TRAIT_CHARM"],
},
{
    id: "RACE_KITSUNE",
    name: "Kitsune",
    description: "A wild monster that looks like a woman with fox ears and tails. While they have an immense aptitude for magic, they are often unable to concentrate on anything other than seeking sex.",
    racial_traits: ["TRAIT_NYMPHOMANIA"],
},
{
    id: "RACE_ZOMBIE",
    name: "Zombie",
    description: "A dreadful undead monster that is born from a human's corpse. They are extremely strong, possessing almost infinite stamina. However, they tend to be very slow.",
    racial_traits: ["TRAIT_UNDEAD", "TRAIT_TIRELESS"],
},
{
    id: "RACE_ANGEL",
    name: "Angel",
    description: "A heavenly monster that seeks to enlighten the people around them. Very good at taking care of each other, but tends to be rather frigid.",
    racial_traits: ["TRAIT_TEMPERANCE", "TRAIT_SERVICE"],
},
{
    id: "RACE_VAMPIRE",
    name: "Vampire",
    description: "Noble undead monster with a natural charisma. They can suck blood from their victims to strengthen themselves.",
    racial_traits: ["TRAIT_UNDEAD", "TRAIT_VAMPIRIC", "TRAIT_CHARM"],
}])

const getRace = buildGetByEnum(RaceData)
export {RaceData, getRace}