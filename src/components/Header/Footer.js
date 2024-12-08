import './Header.css';

function Footer(){
    return(
        <div className="footer-content background">
            <a href="#top" className='back-to-top'>Back to Top</a>
            <h3>My Links</h3>
            <div className="footer-links">
                <a href="https://github.com/nikkiBubencik" target='_blank' rel="noreferrer">
                    <img src='images/icons/github.png' alt="Github Logo" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/nicole-bubencik/" target="blank" rel="noreferrer">
                    <img src='images/icons/linkedin.png' alt="LinkedIn Logo"  className="icon"/>
                </a>
                <a href="mailto:nikkibubencik@gmail.com">
                    <img src='images/icons/email.png' alt="My Email: nikkibubencik@gmail.com" title='nikkibubencik@gmail.com' className="icon"/>
                </a>
            </div>
            <p id="copyright">2024 Nicole Bubencik</p>
        </div>
    )
}

export default Footer;