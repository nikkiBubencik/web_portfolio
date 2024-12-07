import './cs601.css';
import FormExample from './Examples/FormExample';

function TopicCard( props ){
    const { name, description, example } = props.topic;
    const exampleMap = {
        FormExample: <FormExample />
    }
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
                exampleMap[example]}
        </div>
    )
}

export default TopicCard;