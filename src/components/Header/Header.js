import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="header-content background">
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
                        <Link className="nav-link" to="/cs601">CSCS 601</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/photos">Photos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;