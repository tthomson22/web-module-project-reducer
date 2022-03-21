export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_CALCULATOR = "CLEAR_CALCULATOR";
export const CHANGE_CURRENT_MEMORY = "CHANGE_CURRENT_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => { 
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

export const clearCalc = () => {
    return({type:CLEAR_CALCULATOR})
}

export const changeCurrentMemory = (number) => {
    return({type:CHANGE_CURRENT_MEMORY, payload:number})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}

export const recallMemory = (number) => {
    return({type:RECALL_MEMORY, payload:number})
}