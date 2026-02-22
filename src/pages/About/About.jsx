import "./About.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
    return (
        <div className="about-page-container">
            <header>
                <Header />
            </header>

            <main className="main-content">
                <div className="main-content-container animate-fade-in">
                    <div className="decorator-line"></div>
                    <h1 className="main-title">ABOUT ME</h1>
                    
                    <div className="main-description">
                        <p>
                            I am a Backend Software Engineer based in Kolkata, West Bengal, specializing in building high-performance, scalable systems.
                        </p>
                        <p>
                            My current focus is on designing robust RESTful APIs and system architectures using <strong>Go</strong> and <strong>PostgreSQL</strong>. I also possess a strong foundation in enterprise software development, having previously worked extensively with <strong>Java</strong> and <strong>Spring Boot</strong>.
                        </p>
                        <p>
                            Beyond writing clean and efficient code, I bring strong problem-solving capabilities and a collaborative mindset to every project. I am driven by a continuous desire to learn new technologies, optimize existing systems, and build software that creates real-world impact.
                        </p>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;
