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
                        Hi there! I'm Arit Pal, an enthusiastic Junior Backend Developer in Kolkata, West Bengal, with a strong focus on Java and Spring Boot. I love building efficient and reliable software, and I'm particularly adept at creating RESTful APIs that meet the highest industry standards. My tech stack includes Java, Spring Boot, MySQL, PostgreSQL, Go, and Git, and I also have a good grasp of front-end technologies like HTML5, CSS3, and React. What truly sets me apart are my solid soft skills in leadership, problem-solving, and teamwork. I recently earned my B.Tech in Information Technology from Narula Institute of Technology (GPA 8.30) and I'm always excited to learn, grow, and build something impactful.
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
