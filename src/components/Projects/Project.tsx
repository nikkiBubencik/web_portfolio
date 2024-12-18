import './Projects.css';
import { ProjectInterface } from './ProjectTypes';

interface ProjectProps{
    project: ProjectInterface
}

const Project: React.FC<ProjectProps> = ( {project} ) => {
    const { name, languages, description, codeLink, link, image } = project;
    return (
        <div className="section-container">
            <h3>{name}</h3>
            <p>Made With: {languages}</p>
            <p>{description}</p>
            <div className="project-links-container">
                {(codeLink !== '') && <a href={codeLink} target="_blank" rel="noreferrer" className="project-link">See Code</a>}
                {(link !== '') && <a href={link} target="_blank" rel="noreferrer" className="project-link">Project</a>}
            </div>
            {(image !== '') && <p>{image}</p>}
        </div>
    );
}

export default Project;