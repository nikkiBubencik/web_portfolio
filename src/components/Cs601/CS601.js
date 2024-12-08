import { React, useState, useEffect } from 'react';
import './cs601.css';
import TopicCard from './TopicCard';

function Cs601 (){
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        async function getTopics () {
        try {
            const response = await fetch('data/cs601.json');
            const data = await response.json();
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            setTopics(data);
        } catch(error){
            console.log("error fetching data", error);
        }
        }

        getTopics();

    }, []);

    return (
        <div className="topic-container">
            <h2 className="topic-header">Things I learned in CS 601</h2>
            <h3>Web Application Development Course at Boston University</h3>
            <div className='topic-subcontainer'>
                {topics.map((topic, index) => {
                    return <TopicCard topic={topic} />
                    })
                }
            </div>
        </div>
    )
}

export default Cs601;