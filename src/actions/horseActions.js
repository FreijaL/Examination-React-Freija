export const addHorse = (horse) => ({
    type: "ADD_HORSE", 
    payload: horse   
});

export const moveToField = (horse) => ({
    type: "MOVE_TO_FIELD",
    payload: horse
});

export const removeFromField = (horse) => ({
    type: "REMOVE_FROM_FIELD",
    payload: horse
});

export const deleteHorse = (horse => ({
    type: "DELETE_HORSE",
    payload: horse
}));

export const changeInfo = ((horse, property, newValue) => ({
    type: "CHANGE_INFO",
    payload: { horse, property, newValue }
}));
