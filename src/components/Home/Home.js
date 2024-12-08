import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="home-page">
            <h1>Nicole Bubencik</h1>
            <div className="home-page-card">
                <h2>About Me</h2>
                <p>Hi, I am Nicole Bubencik, a graduate student in Computer Information Systems with a concentration in Web Application Development at Boston University. I graduated with a Bachelor's degree in Computer Science and Mathematics in May. I’m passionate about building innovative web applications and solving complex problems through technology. My academic background has given me a strong foundation in both theoretical concepts and hands-on development, and I’m eager to apply this knowledge in a professional setting.</p>
                <p>Through my academic and professional experiences, I have gained knowledge in technologies such as React, JavaScript, Python, and more. In my IT Tech role, I taught myself React to automate an internal visitor management system that was previously manual. The system now allows visitors to sign in, automatically determine if they need to sign a new or updated Confidentiality Disclosure Agreement (CDA), and prints a badge based on their status—blue for U.S. citizens and yellow for others. This project not only improved operational efficiency but also reinforced my skills in web development, problem-solving, and full-stack integration.</p>
                <p>I’m excited to continue developing my skills and contribute to impactful projects in the web development field.</p>
                <p><Link to="/resume" className="page-link">Resume</Link></p>
                <p><Link to="/projects" className="page-link">Projects</Link></p>
            </div>
            <div className="home-page-card">
                <h2>My Interests</h2>
                <p>Outside of coding I enjoy running, reading, hiking, and taking care of my plants. I also enjoy traveling; my family and I recently hiked in Zion National Park in Utah and have visited many states. Outside the United States I have visited countries including England, Ireland, France, Spain, Portugal, and Costa Rica.</p>
            </div>
        </div>
    )
}

export default Home;