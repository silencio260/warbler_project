import { LOAD_MESSAGE, REMOVE_MESSAGE} from '../actionTypes'

export const messages = (state=[], action) => {
    switch(action.type){
        case LOAD_MESSAGE:
            return [...action.messages];
        default:
            return state;
    }
}



