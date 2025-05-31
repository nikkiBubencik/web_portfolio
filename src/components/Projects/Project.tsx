import './Projects.css';
import { ProjectProps } from './ProjectTypes';

const Project: React.FC<ProjectProps> = ( {project, handleOpen} ) => {
    const { name, languages, image } = project;

    return (
        <div className='project-item'>
            { image && 
                <img src={`${image}`} alt={`${name}`}/>
            }
            <div>
                <h3>{name}</h3>
                <p><i>
                    {languages.map((lang: string, index: number) =>
                        index === languages.length - 1 ? 
                        lang
                        : `${lang}, `
                    )}
                </i></p>
                <button onClick={handleOpen}>Learn More</button>
            </div>
        </div>
        // <div className="project-item">
        //     <h3>{name}</h3>
        //     <p>Tech Stack: {languages.map((lang: string, index: number) =>
        //             index === languages.length - 1 ? 
        //                 lang
        //                 : `${lang}, `
        //         )}
        //     </p>
        //     <p>{description}</p>
        //     <div className="project-links-container">
        //         {(codeLink !== '') && <a href={codeLink} target="_blank" rel="noreferrer" className="project-link">See Code</a>}
        //         {(link !== '') && <a href={link} target="_blank" rel="noreferrer" className="project-link">Project</a>}
        //     </div>
        //     {(image !== '') && <p>{image}</p>}
        // </div>
    );
}

export default Project;
