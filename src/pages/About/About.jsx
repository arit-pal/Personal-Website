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
                        I am Arit Pal, a recently graduated Junior Backend Developer based in Kolkata, West Bengal. I specialize in Java and Spring Boot, focusing on developing robust and efficient software solutions. My technical skills include C, Java, Spring Boot, MySQL, HTML5, CSS3, and Git/GitHub. I also bring strong soft skills such as leadership, problem-solving, and teamwork. My practical experience includes developing a RESTful Blog CRUD API using Java, Spring Boot, and MySQL. I also built a functional and responsive YouTube Homepage Clone using HTML5 and CSS3, demonstrating UI/UX awareness. I completed my B.Tech in Information Technology from Narula Institute of Technology, graduating with an average GPA of 8.34. I participated in the AICTE-sponsored Innovate India Coding Championship and captained a winning football team.
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
