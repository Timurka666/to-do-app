import ProjectItem from "../../../entities/project/ui/projectItem";
import CallWindowButton from "../../../features/callWindowButton/ui/callWindowButton";
import CreateProjectForm from "../../../features/createProjectForm/ui/createProjectForm";
import { useTypedSelector } from "../../../shared/hooks/typedSelectorHook";
import './style.scss';

function ProjectList() {
    const {projects} = useTypedSelector(state => state.projects);

    return (
        <>
            <div className="project-list">
                <p className="project-list-title">My Projects</p>
                <CallWindowButton content={<CreateProjectForm />}>+ New Project</CallWindowButton>
            </div>
            <ul className="project-list-wrapper">
                {projects.map((el, i) => (<li className="project-list-wrapper-item">
                    <ProjectItem id={el.id} name={el.name} key={i} />
                </li>))}
            </ul>
        </>
    )
}

export default ProjectList;