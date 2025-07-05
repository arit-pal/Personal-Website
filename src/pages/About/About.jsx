import "./About.css";

const About = () => {
    return (
        <div className="about-page-container">
            <header className="header">
                <div className="header-container">
                    <div className="brand-name">
                        <a href="/">ARIT PAL</a>
                    </div>
                    <nav className="navigation">
                        <a href="/about" className="nav-link active">ABOUT</a>
                        <a href={`mailto:arit.sde@proton.me`} className="nav-link">CONTACT</a>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <div className="main-content-container">
                    <div className="decorator-line"></div>
                    <h1 className="main-title">ABOUT ME</h1>
                    <p className="main-description">
                        I am Arit Pal, a driven and aspiring Software Engineer from Kolkata, West Bengal, specializing in Java and Spring Boot. Currently, I am completing my B.Tech in Information Technology at the Narula Institute of Technology, on track to graduate in 2025.
                    </p>
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

export default About;
