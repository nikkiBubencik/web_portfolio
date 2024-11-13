import './Projects.css';

function Project({ projectInfo }){
    return (
        <div>
            <h3>Showing</h3>
            <h2>{projectInfo.name}</h2>
        </div>
    );
}

export default Project;