import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className=" section-container home-page page-layout">
            <h1>Nicole Bubencik</h1>
            <div>
                <h2>About Me</h2>
                <p>Hi, I'm Nicole Bubencik—a graduate student in Computer Information Systems at Boston University, concentrating in Web Application Development. I hold dual Bachelor's degrees in Computer Science and Mathematics from the University of Rhode Island. I'm passionate about building innovative web applications and solving complex problems through technology. My academic background has equipped me with a solid foundation in both theoretical concepts and hands-on development, and I’m eager to apply this knowledge in a professional setting.</p>
                <p>Through my academic and professional experiences, I’ve gained practical knowledge of technologies like React, TypeScript, and Angular. While working as an IT Technician, I self-taught React to automate an internal visitor management system that had previously been manual. The new system allows visitors to sign in, checks whether they need to sign or update a Confidentiality Disclosure Agreement (CDA), and prints a badge based on their citizenship status—blue for U.S. citizens and yellow for others. This project not only improved operational efficiency but also reinforced my skills in web development, full-stack integration, and creative problem-solving.</p>
                <p>I’m excited to continue growing as a developer and contribute to impactful, user-focused projects in the software development field.</p>
                <p><Link to="/projects" className="page-link">Projects</Link></p>
                <p><Link to="/courses" className="page-link">Courses</Link></p>       
                <p><Link to="/resume" className="page-link">Resume</Link></p>
            </div>
{/*             <div className="home-page-card">
                <h2>My Interests</h2>
                <p>Outside of coding, I enjoy running, reading, hiking, and taking care of my plants. I also enjoy traveling; my family and I recently hiked in Zion National Park in Utah and have visited many states. Outside the United States, I have visited countries including England, Ireland, France, Spain, Portugal, and Costa Rica.</p>
            </div> */}
        </div>
    )
}

export default Home;
