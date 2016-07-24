export const MAX_LEVEL = 100
export const mapLevelToExp = (race, level) => {
    return Math.round(Math.pow(level, 2) * 10)
}

export const mapExpToLevel = (race, exp) => {
    for (let i = 1; i <= MAX_LEVEL; i+= 1) {
        if (mapLevelToExp(race, i) >= exp) {
            return i - 1
        }
    }
    return MAX_LEVEL
}

export const getLevel = (character) => mapExpToLevel(character.get("race"), character.get("experience").get("current"))