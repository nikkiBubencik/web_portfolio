import './cs601.css';
import FormExample from './Examples/FormExample';
import { useState } from 'react';
import DragDropExample from './Examples/DragDropExample';

function TopicCard( props ){
    const [seeExample, setSeeExample] = useState(false);
    const { name, description, example } = props.topic;
    const exampleMap = {
        FormExample: <FormExample />,
        DragDropExample: <DragDropExample />
    }
    function handleSeeExampleChange(){
        setSeeExample(!seeExample);
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
                (<div>
                    <button onClick={handleSeeExampleChange}>
                        {seeExample ? <p>Hide Example</p> : <p>Show Example</p>}
                    </button>
                    {seeExample && exampleMap[example]}
                </div>)
            }
        </div>
    )
}

export default TopicCard;