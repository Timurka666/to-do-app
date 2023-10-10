import { useDispatch } from 'react-redux';
import Button from '../../button/ui/button';
import { useTypedSelector } from '../../hooks/typedSelectorHook';
import './style.scss';



function Modal() {
    const {isActive, content} = useTypedSelector(state => state.modal)
    const dispatch = useDispatch();
    const closeWindow = () => {
        dispatch({type: 'DEACTIVATE'});
        dispatch({type: 'SET_CONTENT', payload: null});
    }
    return (
        <div className={isActive ? "modal active" : "modal"}>
            <div className={isActive ? "modal-window active" : "modal-window"}>
                {content}
                <Button type='cancel' onClick={() => {closeWindow()}}>close</Button>
            </div>
        </div>
    )
}

export default Modal;