import './Projects.css';
import { ProjectProps } from './ProjectTypes';

const Project: React.FC<ProjectProps> = ( {project, handleOpen} ) => {
    const { name, languages, image } = project;

    return (
        <div className='project-item'>
            <div className="project-img" >
                <img  src={image ?`${image}` : './images/img_filler.jpg'} alt={`${name}`}/>
            </div>
            <div className="project-content">
                <h3>{name}</h3>
                <p className="secondary-content"><i>
                    {languages.map((lang: string, index: number) =>
                        index === languages.length - 1 ? 
                        lang
                        : `${lang}, `
                    )}
                </i></p>
                <button className="learn-more-button" onClick={handleOpen}>Learn More</button>
            </div>
        </div>
    );
}

export default Project;
