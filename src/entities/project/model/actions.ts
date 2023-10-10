import store from "../../../store";

export function createAProject(newProject: string) {
    store.dispatch({type: 'CREATE_PROJECT', payload: newProject});
}