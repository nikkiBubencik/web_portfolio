import './Resume.css';
import { JobInterface } from './ResumeTypes';

interface JobCardProps {
    job: JobInterface;
}

const JobCard: React.FC<JobCardProps> = ( props ) => {
    const { title, company, location, when, description } = props.job;

    return(
        <div className="job-card">
            <div className="job-header">
                <h3 className='primary-content'>{title}</h3>
                <div className="company-info secondary-content">
                    <h4>{company}</h4>
                    <h4>{location}</h4>
                    <h4>{when}</h4>
                </div>
            </div>
            <ul className="job-desc">
                {description.map((desc: string, index: number) => {
                    return <li key={index}>{desc}</li>
                })
                }
            </ul>
        </div>
    )
}

export default JobCard;
