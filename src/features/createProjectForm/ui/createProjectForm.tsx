import { useState } from "react";
import TextInput from "../../../shared/input/ui/input";
import Button from "../../../shared/button/ui/button";
import { createAProject } from "../../../entities/project/model/actions";
import './style.scss';
import { useDispatch } from "react-redux";

function CreateProjectForm() {
    const [projectName, setName] = useState('');
    const dispatch = useDispatch()

    return (
        <div className="create-project-form">
            <h2>Project's name</h2>
            <TextInput name="Name" placeholder="Project's name" value={projectName} onChange={(e) => {setName(e.target.value)}} />
            <Button type="success" onClick={() => {createAProject(projectName); dispatch({type: 'DEACTIVATE'})}}>Create a project</Button>
        </div>
    )
}

export default CreateProjectForm;