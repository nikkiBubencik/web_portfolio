import { React, useEffect, useState } from 'react';
import './Projects.css';
import Project from './Project';

function ShowProjects(){
    const [projectList, setProjectList] = useState([]);

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
            <h1 className="header-title"> Projects </h1> 

            <div className="project-container">
                {projectList.map((project, index) => (
                    <Project project={project} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowProjects;