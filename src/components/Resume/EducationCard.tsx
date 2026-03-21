import './Resume.css'
import { SchoolInterface } from './ResumeTypes';

interface SchoolCardProps{
    education: SchoolInterface
}

const EducationCard: React.FC<SchoolCardProps> =( props ) =>{
    const { school, majors, minor, concentration, other } = props.education;

    return (
        <div className="education-card">
            {majors.map((major => {
                return <h3 className="primary-content" key={major.name}>{major.type}: {major.name}</h3>
            }))}
            { concentration !== "" &&
                <h4 className='primary-content' style={{'fontSize':'1rem'}}>Concentration: {concentration}</h4>
            }
            { minor !== "" && 
                <h4 className='primary-content' style={{'fontSize':'1rem'}}>Minor: {minor}</h4>
            }
            <h5 className="secondary-content">{school}</h5>
            {other.map((misc, index) => {
                return <p className="secondary-content" key={index}>{misc}</p>
            })}
        </div>
    )
}

export default EducationCard;