import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../shared/hooks/typedSelectorHook";
import { ITask } from "../model/reducer";
import './style.scss';
import CallWindowButton from "../../../features/callWindowButton/ui/callWindowButton";
interface IProps extends ITask {
    EditButton: React.ReactNode
}

function TaskItem(props: IProps) {
    const dispatch = useDispatch();
    return (
        <div
        draggable
        onDragStart={(e) => {dispatch({type: 'SET_DND_STATE', payload: {currentTaskId: props.id, currentStatus: props.status}})}}
        onDragEnd={(e) => {dispatch({type: 'SET_DND_STATE', payload: {currentTaskId: 0, currentStatus: undefined}})}}
        className="task-item">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>
                Created at: {new Date(props.createdAt).toDateString()}<br />
                Deadline: {new Date(props.deadline).toDateString()}<br />
                Time at work: {Math.floor((Date.now() - props.createdAt) / 1000 / 60)} minutes
            </p>
            {props.EditButton}
        </div>
    )
}

export default TaskItem;