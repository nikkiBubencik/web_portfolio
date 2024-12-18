import './Resume.css'
import { SchoolInterface } from './ResumeTypes';

interface SchoolCardProps{
    education: SchoolInterface
}

const EducationCard: React.FC<SchoolCardProps> =( props ) =>{
    const { school, majors, minor, concentration, other } = props.education;

    return (
        <div className="job-card">
            <h3>{school}</h3>
            {majors.map((major => {
                return <h4 key={major.name}>{major.type}: {major.name}</h4>
            }))}
            { concentration !== "" &&
                <h5>Concentration: {concentration}</h5>
            }
            { minor !== "" && 
                <h5>Minor: {minor}</h5>
            }
            {other.map((misc, index) => {
                return <p key={index}>{misc}</p>
            })}
        </div>
    )
}

export default EducationCard;