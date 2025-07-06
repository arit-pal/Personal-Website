import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-page-container">
            <header className="header">
                <div className="header-container">
                    <div className="brand-name">
                        <a href="/">ARIT PAL</a>
                    </div>
                    <nav className="navigation">
                        <Link to="/about" className="nav-link">ABOUT</Link>
                        <a href="mailto:arit.sde@proton.me" className="nav-link">CONTACT</a>
                    </nav>
                </div>
            </header>

            <main className="home-main-content">
                <div className="home-main-content-container">
                    <h1 className="main-headline">
                        Aspiring Software Engineer Specializing in Backend Development
                    </h1>
                    <p className="main-subheadline">
                        I build robust and scalable web applications using Java and Spring Boot. Passionate about creating efficient, real-world solutions.
                    </p>
                    <Link to="/about" className="cta-button">
                        Learn More About Me
                    </Link>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-container">
                    <p>© 2025 Arit Pal. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
