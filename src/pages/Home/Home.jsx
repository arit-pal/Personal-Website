import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div className="home-page-container">
            <header>
                <Header />
            </header>

            <main className="home-main-content">
                <div className="home-main-content-container">
                    <h1 className="main-headline">
                        Software Engineer Specializing in Backend Development
                    </h1>
                    <p className="main-subheadline">
                        I build robust and scalable web applications using Java and Spring Boot. Passionate about creating efficient, real-world solutions.
                    </p>
                    <Link to="/about" className="cta-button">
                        Learn More About Me
                    </Link>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
