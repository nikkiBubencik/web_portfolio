import './Resume.css';
import JobCard from './JobCard';
import { useState, useEffect } from 'react';
import EducationCard from './EducationCard';
import { JobInterface, SchoolInterface } from './ResumeTypes';

const Resume: React.FC = ( ) => {
    const [jobs, setJobs] = useState<JobInterface[]>([]);
    const [education, setEducation] = useState<SchoolInterface[]>([]);
    const [skills, setSkills] = useState<string[]>([]);

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
            <h2 className="page-layout">My Resume</h2>
            <section className="page-layout">
                <h3>Work Experience</h3>
                <div>
                    {jobs.map((job: JobInterface, index: number) => {
                        return <JobCard job={job} key={index}/>
                    })}
                </div>
            </section>

            <section className='page-layout'>
                <h3>Education</h3>
                <div className="education-skill-container">
                    {education.map((school: SchoolInterface, index: number) => {
                        return <EducationCard education={school} key={index}/>
                    })}
                </div>
            </section>
            <section className='page-layout'>
                <h3>Skills</h3>
                <div className="education-skill-container">    
                    {skills.map((skill: string, index: number) => {
                        return <p key={index} className="job-card">{skill}</p>
                    })}
                </div>
            </section>
            
            <div className="portfolio-links page-layout">
                <a href="images/Nicole_Bubencik.jpg" download>
                    Download Resume
                </a>
                <a href="https://github.com/nikkiBubencik" target="_blank" rel="noreferrer">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/nicole-bubencik/" target='_blank' rel="noreferrer">
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Resume;