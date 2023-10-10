
import {Reducer} from 'redux'

interface IState {
    isActive: boolean,
    content: React.ReactNode | undefined
}

const initialState: IState = {
    isActive: false,
    content: undefined
}
const modalReducer: Reducer<IState, {type: string, payload: any}> = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTIVATE':
            return {...state, isActive: true};
        case 'DEACTIVATE':
            return {...state, isActive: false};
        case 'SET_CONTENT':
            return {...state, content: action.payload};
        default:
            return state;
    }
}

export default modalReducer;