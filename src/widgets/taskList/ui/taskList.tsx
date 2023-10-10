
import { useDispatch } from 'react-redux';
import './style.scss';
import { useTypedSelector } from '../../../shared/hooks/typedSelectorHook';

interface IProps {
    type: 'queue' | 'development' | 'done',
    children: React.ReactNode,
}

function TaskList(props: IProps) {
    const dispatch = useDispatch();
    const {currentStatus, currentTaskId} = useTypedSelector(state => state.DnDTask);
    return (
        <div
        className={`task-list ${props.type}`}
        onDragEnter={(e) => {dispatch({type: 'SET_DND_STATE', payload: {currentStatus: props.type}})}}
        onDragOver={(e) => {e.preventDefault(); dispatch({type: 'SET_DND_STATE', payload: {currentStatus: props.type}})}}
        onDragLeave={(e) => {dispatch({type: 'SET_DND_STATE', payload: {currentStatus: undefined}})}}
        onDrop={() => {dispatch({type: 'EDIT_STATUS', payload: {id: currentTaskId, status: currentStatus}})}}>
            {props.children}
        </div>
    )
}

export default TaskList;