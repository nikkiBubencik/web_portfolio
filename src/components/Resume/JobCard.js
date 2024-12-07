import './Resume.css';
function JobCard( props ){
    const { title, company, location, when, description } = props.job;
    console.log("job", title);
    return(
        <div className="job-card">
            <div className="job-header">
                <h3>{title}</h3>
                <div className="company-info">
                    <h3>{company}</h3>
                    <h3>{location}</h3>
                </div>
                <h3>{when}</h3>
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