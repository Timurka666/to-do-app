export interface ISubTask {
    taskId: number,
    text: string,
    isDone: boolean
}

 export interface ITask {
    projectId: number,
    id: number,
    title: string,
    description: string,
    subTasks: ISubTask[],
    createdAt: number,
    deadline: number,
    files: File[],
    status: 'queue' | 'development' | 'done',
    priority: number,

}

export interface INewTaskPayload {
    projectId: number,
    title: string,
    description: string,
    subTasks: ISubTask[],
    deadline: number,
    files: File[],
    status: 'queue' | 'development' | 'done',
    priority: number,
}

export interface IEditTaskPayload {
    title?: string,
    description?: string,
    subTasks?: ISubTask[],
    deadline?: number,
    files?: File[],
    status?: 'queue' | 'development' | 'done',
    priority?: number,
}

interface IState {
    tasks: ITask[],
    countId: number
}

const initialState: IState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') as string) : {
    tasks: [],
    countId: 1
}

const taskReducer = (state = initialState, action: {type: string, payload?: any}) => {
    switch (action.type) {
        case 'CREATE_TASK':
            if (action.payload) {
                const newTask: ITask = {
                    projectId: action.payload.projectId,
                    id: state.countId,
                    title: action.payload.title,
                    description: action.payload.description,
                    createdAt: Date.now(),
                    deadline: action.payload.deadline,
                    files: action.payload.files,
                    priority: action.payload.priority,
                    status: action.payload.status,
                    subTasks: action.payload.subTasks
                };
                const newState: IState = {
                    countId: state.countId+1,
                    tasks: [...structuredClone(state.tasks), newTask]
                };
                localStorage.setItem('tasks', JSON.stringify(newState));
                return newState;
            }
            return state;
        case 'EDIT_STATUS':
            if (action.payload) {
                const newState: IState = {...state, tasks: state.tasks.map((el) => {
                    if (el.id === action.payload.id) {
                        return {...el, status: action.payload.status}
                    }
                    return el;
                })};
                localStorage.setItem('tasks', JSON.stringify(newState));
                return newState;
            }
            return state;
        case 'EDIT_TASK':
            if (action.payload) {
                const newState: IState = {...state, tasks: state.tasks.map((el, i) => {
                    if (el.id === action.payload.taskId) {
                        return {...el, ...action.payload.newTask}
                    }
                    return el;
                })}
                localStorage.setItem('tasks', JSON.stringify(newState));
                return newState;
            }
            return state;
        default:
            return state;
    }
}

export default taskReducer;