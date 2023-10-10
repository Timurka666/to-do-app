import { useState } from "react";
import TextInput from "../../../shared/input/ui/input";
import RadioInput from "../../../shared/radioInput/ui/radioInput";
import './style.scss';
import { INewTaskPayload, ISubTask } from "../../../entities/task/model/reducer";
import CreateSubTaskForm from "./createSubTaskForm";
import DateInput from "../../../shared/dateInput/ui/dateInput";
import { useDispatch } from "react-redux";
import Button from "../../../shared/button/ui/button";


function CreateTaskForm({projectId}: {projectId: number}) {
    const dispatch = useDispatch();;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [taskType, setType] = useState<'queue' | 'development' | 'done'>('queue');
    const [priority, setPriority] = useState<number>(1);
    const [subTasks, setSubTasks] = useState<ISubTask[]>([]);
    const [deadline, setDeadline] = useState<number>(Date.now());

    const createTask = () => {
        const newTask: INewTaskPayload = {
            projectId: projectId,
            deadline,
            description,
            files,
            priority,
            status: taskType,
            subTasks,
            title
        }
        dispatch({type: 'CREATE_TASK', payload: newTask});
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
            <Button type="success" onClick={(e) => {createTask()}}>create a new task</Button>
        </div>
    );
}

export default CreateTaskForm;