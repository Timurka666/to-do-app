interface IState {
    currentStatus: 'queue' | 'development' | 'done' | undefined,
    currentTaskId: number
}

const initialState: IState = {
    currentStatus: undefined,
    currentTaskId: 0
}

function DnDTaskReducer(state: IState = initialState, action: {type: string, payload?: any}): IState {
    switch (action.type) {
        case 'SET_DND_STATE':
            if (action.payload) {
                return {...state, ...action.payload}
            }
            return state;
        default:
            return state;
    }
}

export default DnDTaskReducer;