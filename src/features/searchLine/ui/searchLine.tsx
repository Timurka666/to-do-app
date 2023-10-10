import { useState } from "react";
import TextInput from "../../../shared/input/ui/input";
import { useTypedSelector } from "../../../shared/hooks/typedSelectorHook";
import './style.scss'
import { useDispatch } from "react-redux";
import EditTaskForm from "../../editTaskForm/ui/editTaskForm";

function SearchLine(props: {windowContent: typeof EditTaskForm}) {
    const [search, setSearch] = useState<string | number>('');
    const {tasks} = useTypedSelector(state => state.tasks);
    const dispatch = useDispatch();

    const callWindow = (id: number) => {
        dispatch({type: 'SET_CONTENT', payload: <props.windowContent taskId={id} />});
        dispatch({type: 'ACTIVATE'});
     }
    return (
        <>
        <TextInput
        name="search-line"
        placeholder="search tasks"
        onChange={(e) => {setSearch(e.target.value)}}
        value={String(search)}
        />
        <ul className="task-search-list" style={{display: search ? 'flex' : 'none'}}>
            {search && tasks
            .filter((el, i) => (el.id === Number(search) || el.title.includes(String(search))))
            .map((el, i) => (
                <li key={i} onClick={e => {callWindow(el.id)}}>
                    <h2>{el.title}</h2>
                </li>
            ))}
        </ul>
        </>

    )
}

export default SearchLine;