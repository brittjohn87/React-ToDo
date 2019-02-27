import { ADD_TODO } from "./actions";

export const initialState = []

export default (state = initialState, { type, payload } = {}) => {
    switch(type){
        case ADD_TODO:
            return [...state, payload.todo];
        default: 
            return state
    }
}
