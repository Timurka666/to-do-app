import { useDispatch } from "react-redux";
import Button from "../../../shared/button/ui/button";

interface IProps {
    content: React.ReactNode,
    children: any
}

function CallWindowButton(props: IProps) {
    const dispatch = useDispatch();
    const callWindow = () => {
       dispatch({type: 'SET_CONTENT', payload: props.content});
       dispatch({type: 'ACTIVATE'});
    }
    return (
        <Button onClick={() => {callWindow()}}>{props.children}</Button>
    )
}

export default CallWindowButton;