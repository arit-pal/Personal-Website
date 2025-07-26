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
                        I build robust and scalable backend systems that power dynamic applications. My passion lies in crafting efficient, real-world solutions that drive performance and reliability.
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
