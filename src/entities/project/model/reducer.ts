interface IState {
    projects: {
        id: number,
        name: string
    }[],
    idCount: number
}

const initialState: IState = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects') as string) : {
    projects: [],
    idCount: 1
}

function projectReducer(state: IState = initialState, action: {type: string, payload: any}) {
    switch (action.type) {
        case 'CREATE_PROJECT':
            const newProject = {id: structuredClone(state.idCount), name: action.payload};
            localStorage.setItem('projects', JSON.stringify({idCount: state.idCount+1, projects: [...state.projects, newProject]}));
            return {idCount: state.idCount+1, projects: [...state.projects, newProject]};
        default:
            return state;
    }
}

export default projectReducer;