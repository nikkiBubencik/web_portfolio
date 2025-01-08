import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div id="top" className="header-content background">
            <h1>Nicole Bubencik</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;