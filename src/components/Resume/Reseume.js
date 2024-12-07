import resume from './Nicole_Bubencik.jpg';
import './Resume.css';
import JobCard from './JobCard';
import { useState, useEffect } from 'react';
import EducationCard from './EducationCard';

function Resume( props ){
    const [jobs, setJobs] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        async function getData () {
        try {
            const response = await fetch('data/resume.json');
            const data = await response.json();
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            setJobs(data.jobs);
            setEducation(data.education);
            setSkills(data.skills);
        } catch(error){
            console.log("error fetching data", error);
        }
        }

        getData();

    }, []);

    return (
        <div className="resume-container">
            <h2>My Resume</h2>
            <section>
                <h3>Work Experience</h3>
                <div>
                    {jobs.map((job, index) => {
                        return <JobCard job={job} key={index}/>
                    })}
                </div>
            </section>

            <section>
                <h3>Education</h3>
                <div className="education-skill-container">
                    {education.map((school, index) => {
                        return <EducationCard education={school} key={index}/>
                    })}
                </div>
            </section>
            <section>
                <h3>Skills</h3>
                <div className="education-skill-container">    
                    {skills.map((skill, index) => {
                        return <p key={index} className="job-card">{skill}</p>
                    })}
                </div>
            </section>
            
            <div className="portfolio-links">
                <a href={resume} download>
                    Download Resume
                </a>
                <a href="https://github.com/nikkiBubencik" target="_blank">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/nicole-bubencik/" target='_blank'>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Resume;