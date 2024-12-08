import './Resume.css';
function JobCard( props ){
    const { title, company, location, when, description } = props.job;

    return(
        <div className="job-card">
            <div className="job-header">
                <h3>{title}</h3>
                <div className="company-info">
                    <h4>{company}</h4>
                    <h4>{location}</h4>
                </div>
                <h4>{when}</h4>
            </div>
            <ul>
                {description.map((desc, index) => {
                    return <li key={index}>{desc}</li>
                })
                }
            </ul>
        </div>
    )
}

export default JobCard;