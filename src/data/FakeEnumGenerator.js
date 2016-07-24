import { Map } from 'immutable'

const addEnum = (data, obj) => {
    let item = {}
    item[obj.id] = Map(obj)
    return data.merge(item)
}

const addEnums = (objs) => {
    let raceData = Map();
    for (const i in objs) {
        raceData = addEnum(raceData, objs[i])
    }
    return raceData;
}
const buildGetByEnum = (data) => {
    return (id) => {
        const res = data.get(id)
        if (res === undefined) {
            console.log(id + " is not a valid id")
        }
        return res
    }
}

export {addEnum, addEnums, buildGetByEnum};