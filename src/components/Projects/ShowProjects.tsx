import { useEffect, useState } from 'react';
import './Projects.css';
import Project from './Project';
import { ProjectInterface } from './ProjectTypes';
import Sidebar from './Sidebar';
import ProjectDetail from './ProjectDetail';

const ShowProjects: React.FC = () => {
    const [projectList, setProjectList] = useState<ProjectInterface[]>([]);
    const [showLangs, setShowLangs] = useState<string[]>([]);
    const [ShowProjects, setShowProjects] = useState<ProjectInterface[]>([]);
    const [allLanguages, setAllLanguages] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectInterface>({name: "", description: "", languages: [], codeLink: "", link: "", image: ""});
    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    useEffect(() => {
        async function getProjects () {
        try {
            const response = await fetch('data/projects.json');
            const data = await response.json();
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            setProjectList(data);
            setShowProjects(data);
        } catch(error){
            console.log("error fetching data", error);
        }
        }

        getProjects();

    }, []);

    useEffect(() => {
        function getAllLanguages(): void{
            setAllLanguages(
                [...new Set(projectList.flatMap(project => project.languages))]

            );
        }
        getAllLanguages();
    }, [projectList])

    useEffect(() =>{
        // for each language in show language see if projct includes it
        if (showLangs.length === 0){
            setShowProjects(projectList);
        }
        else{
            setShowProjects(projectList.filter((project: ProjectInterface) => {
                return project.languages.some(item => showLangs.includes(item))
            })
            )
        }
    }, [showLangs, projectList])

    function addLanguage(newLang: string): void {
        setShowLangs(prevList => [...prevList, newLang])
    }

    function deleteLanguage(oldLang: string): void {
        setShowLangs(
            showLangs.filter(lang => lang !== oldLang)
        )
    }

    const handleClose = () =>{
        setShowPopUp(false);
    }

    const handleOpen = (project: ProjectInterface) =>{
        setSelectedProject(project);
        setShowPopUp(true);        
    }

    return (
        <div className="project-page">
            <h1 className="header-title page-layout"> Projects </h1> 
            <div id='main-project'>
                <aside id="sidebar">
                    <Sidebar languages={allLanguages} addLanguage={addLanguage} deleteLanguage={deleteLanguage} />
                </aside>
                <div className="project-container page-layout project-display">
                    {ShowProjects.map((project: ProjectInterface, index: number) => (
                        <Project project={project} handleOpen={() => handleOpen(project)} key={index}/>
                        ))
                    }
                </div>
            </div>
            { showPopUp &&
                <div className='project-detail'>
                    <ProjectDetail project={selectedProject} handleClose={handleClose} ></ProjectDetail>
                </div>
            }
        </div>
    )
}

export default ShowProjects;