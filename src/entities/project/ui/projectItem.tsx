import { Link } from 'react-router-dom';
import './style.scss';

interface IProps {
    name: string,
    id: number
}

function ProjectItem(props: IProps) {
    return (
        <Link to={`/${props.id}`} style={{textDecoration: 'none'}}>
            <div className="project-item">
                <div className="project-title">{props.name}</div>
            </div>
        </Link>
    )
}

export default ProjectItem;