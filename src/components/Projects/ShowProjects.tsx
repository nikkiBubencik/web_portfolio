import { useEffect, useState } from 'react';
import './Projects.css';
import Project from './Project';
import { ProjectInterface } from './ProjectTypes';

const ShowProjects: React.FC = () => {
    const [projectList, setProjectList] = useState<ProjectInterface[]>([]);

    useEffect(() => {
        async function getProjects () {
        try {
            const response = await fetch('data/projects.json');
            const data = await response.json();
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            setProjectList(data);
        } catch(error){
            console.log("error fetching data", error);
        }
        }

        getProjects();

    }, []);

    return (
        <div>
            <h1 className="header-title page-layout"> Projects </h1> 

            <div className="project-container page-layout">
                {projectList.map((project: ProjectInterface, index: number) => (
                    <Project project={project} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowProjects;