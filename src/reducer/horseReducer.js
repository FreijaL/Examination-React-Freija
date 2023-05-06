import { horseStore } from '../store/horseStore';


const horseReducer = (state = horseStore, action) => {
    let horses = [...state.horses];
    switch (action.type) {

        case "ADD_HORSE":
            let newHorse = {...action.payload}
            horses.unshift(newHorse)
            return {
                ...state, 
                horses: horses,
            }   
        case "DELETE_HORSE":
            return {
                ...state,
                horses: [...state.horses.filter((horse) => horse.id !== action.payload.id)]
            }
        case "CHANGE_INFO":
            let changedInfo = action.payload.horse;
            let property = action.payload.property;
            let newValue = action.payload.newValue;
            changedInfo[property] = newValue;       // för att kunna välja olika properties (ex name: age:)

            let horseToChangeIndex = horses.findIndex((horse) => horse.id === changedInfo.id)
            horses[horseToChangeIndex] = changedInfo;
            
            return {
                ...state,
                horses: [...horses]
            }
        default:
            return state
    }
}

export default horseReducer;
