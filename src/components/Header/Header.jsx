import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="brand-name">
                    <NavLink to="/">ARIT PAL</NavLink>
                </div>
                <nav className="navigation">
                    <NavLink to="/about" className="nav-link">
                        ABOUT
                    </NavLink>
                    <a href="mailto:itsaritpal@gmail.com" className="nav-link">
                        CONTACT
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
