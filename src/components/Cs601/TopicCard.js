import './cs601.css';
import FormExample from './Examples/FormExample';
import { useState } from 'react';
import DragDropExample from './Examples/DragDropExample';
import GeolocationExample from './Examples/GeolocationExample';

function TopicCard( props ){
    const [seeExample, setSeeExample] = useState(false);
    const { name, description, example } = props.topic;
    const exampleMap = {
        FormExample: <FormExample />,
        DragDropExample: <DragDropExample />,
        GeolocationExample: <GeolocationExample />
    }
    function handleSeeExampleChange(){
        setSeeExample(!seeExample);
    }

    return (
        <div className="learner-card">
            <h4>{name}</h4>
            <ul className='topic-list'>
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