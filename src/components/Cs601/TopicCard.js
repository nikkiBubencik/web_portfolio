import './cs601.css';

function TopicCard( props ){
    const { name, description, example } = props.topic;
    console.log(description);
    // might make description of list of bullet points then would have to change how it is shown
    return (
        <div className="learner-card">
            <h4>{name}</h4>
            <ul>
                {description.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
            {example !== "" &&
                example}
        </div>
    )
}

export default TopicCard;