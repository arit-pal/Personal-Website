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
                <div className="main-content-container">
                    <div className="decorator-line"></div>
                    <h1 className="main-title">ABOUT ME</h1>
                    <p className="main-description">
                        I'm Arit Pal, a recently graduated Junior Backend Developer based in Kolkata, West Bengal. I specialize in Java and Spring Boot, focusing on developing robust and efficient software solutions. My technical skills include Java, Spring Boot, MySQL, HTML5, CSS3, React, Go, and Git. I also possess strong soft skills, including leadership, problem-solving, and teamwork. My practical experience includes developing RESTful APIs that follow industry best practices. I completed my B.Tech in Information Technology from Narula Institute of Technology, graduating with an average GPA of 8.34. I'm passionate about learning and building something new every day.
                    </p>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;
