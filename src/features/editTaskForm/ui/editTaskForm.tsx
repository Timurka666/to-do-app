import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../shared/hooks/typedSelectorHook";
import { useState } from "react";
import { ISubTask, IEditTaskPayload } from "../../../entities/task/model/reducer";
import Button from "../../../shared/button/ui/button";
import DateInput from "../../../shared/dateInput/ui/dateInput";
import TextInput from "../../../shared/input/ui/input";
import CreateSubTaskForm from "../../createTaskForm.tsx/ui/createSubTaskForm";
import RadioInput from "../../../shared/radioInput/ui/radioInput";

function EditTaskForm(props: {taskId: number}) {
    const {tasks} = useTypedSelector(state => state.tasks);
    const task = tasks.find(el => el.id === props.taskId);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [files, setFiles] = useState<File[]>(task?.files || []);
    const [priority, setPriority] = useState<number>(task?.priority || 1);
    const [subTasks, setSubTasks] = useState<ISubTask[]>(task?.subTasks || []);
    const [deadline, setDeadline] = useState<number>(task?.deadline || Date.now());
    const [type, setType] = useState<'queue' | 'development' | 'done'>(task?.status || 'queue');

    const editTask = () => {
        const newTask: IEditTaskPayload = {
            deadline,
            description,
            files,
            priority,
            status: type,
            subTasks,
            title
        }
        dispatch({type: 'EDIT_TASK', payload: {taskId: props.taskId, newTask}});
    };

    return (
        <div className="create-task-form">
            <h2>Task Title</h2>
            <TextInput
            name="task title"
            placeholder="task title"
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
            />
            <h2>Task Description</h2>
            <textarea
            placeholder="task description"
            name="task description"
            onChange={(e) => {setDescription(e.target.value)}}
            >
                {description}
            </textarea>
            <h2>Applied Files</h2>
            <input
            type="file"
            onChange={(e) => {setFiles(Array.from(e.target.files || []))}}
            multiple
            />
            <h2>Task Type</h2>
            <RadioInput name="task-type" params={['queue', 'development', 'done']} setState={setType} />
            <h2>Priority</h2>
            <input
            type="number"
            min={1}
            value={priority}
            onChange={(e) => {setPriority(Number(e.target.value))}}
            />
            <h2>Sub tasks</h2>
            <CreateSubTaskForm subTasks={subTasks} setSubTasks={setSubTasks} />
            <h2>Deadline</h2>
            <DateInput min={Date.now()} name="deadline" value={deadline} onChange={(e) => {setDeadline((new Date(e.target.value)).getTime())}} />
            <Button type="success" onClick={(e) => {editTask()}}>edit and save</Button>
        </div>
    );
}

export default EditTaskForm;