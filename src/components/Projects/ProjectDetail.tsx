import { ProjectProps } from "./ProjectTypes";

const ProjectDetail: React.FC<ProjectProps> = ( {project, handleClose} ) => {
    const { name, languages, description, codeLink, link, image } = project;

    return(
        <div className="project-desc">
            <h2>{name}</h2>
            <p>Tech Stack: 
                {languages.map((lang: string, index: number) =>
                    index === languages.length - 1 ? 
                    lang
                    : `${lang}, `
                )}
            </p>
            <p>{description}</p>
            <div className="project-links-container">
                {(codeLink !== '') && <a href={codeLink} target="_blank" rel="noreferrer" className="project-link">See Code</a>}
                {(link !== '') && <a href={link} target="_blank" rel="noreferrer" className="project-link">Project</a>}
            </div>
            { image && <img src={`${image}`} alt={`${name} screenshot`}></img>}
            <button className='close-button' onClick={handleClose}>Close</button>
        </div>
    )
}

export default ProjectDetail;