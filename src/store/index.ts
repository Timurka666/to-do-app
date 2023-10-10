import { combineReducers, legacy_createStore } from "redux";
import modalReducer from "../shared/modal/model/reducer";
import projectReducer from "../entities/project/model/reducer";
import taskReducer from "../entities/task/model/reducer";
import DnDTaskReducer from "../entities/task/model/dragReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    projects: projectReducer,
    tasks: taskReducer,
    DnDTask: DnDTaskReducer
});

const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;