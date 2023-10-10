import { useState } from "react";
import { ISubTask } from "../../../entities/task/model/reducer";
import TextInput from "../../../shared/input/ui/input";
import Button from "../../../shared/button/ui/button";
import { useTypedSelector } from "../../../shared/hooks/typedSelectorHook";

interface IProps {
    subTasks: ISubTask[],
    setSubTasks: React.Dispatch<React.SetStateAction<ISubTask[]>>
}

function CreateSubTaskForm(props: IProps) {
    const [subTask, setSubTask] = useState('');
    const id = useTypedSelector(state => state.tasks?.countId);
    return (
        <div>
            <TextInput name="subtask" placeholder="subtask name" value={subTask} onChange={(e) => {setSubTask(e.target.value)}} />
            <Button onClick={() => {props.setSubTasks([...props.subTasks, {text: subTask, isDone: false, taskId: (id || 1)}])}}>add subtask</Button>
            <ul>
                {props.subTasks.map((el, i) => (<li key={i}>
                    <input type="checkbox" id={`subtask-${i}`} checked={el.isDone} onChange={(e) => {props.setSubTasks(props.subTasks.map((el, index) => index === i ? {...el, isDone: e.target.checked} : el))}} />
                    <label htmlFor={`subtask-${i}`}>
                        {el.text}
                    </label>
                    </li>))}
            </ul>
        </div>
    )
}

export default CreateSubTaskForm;