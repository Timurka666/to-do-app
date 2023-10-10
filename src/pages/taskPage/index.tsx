import { useNavigate, useParams } from "react-router-dom";
import TaskList from "../../widgets/taskList/ui/taskList";
import { useTypedSelector } from "../../shared/hooks/typedSelectorHook";
import TaskItem from "../../entities/task/ui/taskItem";
import './style.scss';
import CallWindowButton from "../../features/callWindowButton/ui/callWindowButton";
import CreateTaskForm from "../../features/createTaskForm.tsx/ui/createTaskForm";
import { useCallback } from "react";
import EditTaskForm from "../../features/editTaskForm/ui/editTaskForm";
import Button from "../../shared/button/ui/button";

function TaskPage() {
    const params = useParams();
    const tasks = useTypedSelector(state => state.tasks?.tasks);
    const navigate = useNavigate();
    const memoizedTasks = useCallback((type: 'done' | 'queue' | 'development') => {
        if (tasks) {
            return tasks
            .filter((el) => (el.status === type && el.projectId === Number(params.id)))
            .sort((a, b) => (a.priority - b.priority))
            .map((el, i) => (
            <TaskItem
            EditButton={<CallWindowButton content={<EditTaskForm taskId={el.id} />}>More</CallWindowButton>}
            createdAt={el.createdAt}
            deadline={el.deadline}
            description={el.description}
            files={el.files}
            id={el.id}
            priority={el.priority}
            projectId={el.projectId}
            status={el.status}
            subTasks={el.subTasks}
            title={el.title}
            key={i} />))
        }
    }, [tasks, params.id]);
    return (
        <div className="task-page">
        <Button onClick={() => {navigate('/')}}>Back to projects</Button>
        <CallWindowButton content={<CreateTaskForm projectId={Number(params.id)} />}>New Task</CallWindowButton>
        <div className="task-list-wrapper">
            <TaskList type="done">
                {tasks && memoizedTasks('done')}
            </TaskList>
            <TaskList type="development">
                {tasks && memoizedTasks('development')}
            </TaskList>
            <TaskList type="queue">
                {tasks && memoizedTasks("queue")}
            </TaskList>
        </div>
        </div>
    )
}

export default TaskPage;