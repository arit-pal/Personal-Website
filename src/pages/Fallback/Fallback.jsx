import { Link } from "react-router-dom";
import "./Fallback.css";

const Fallback = () => {
    return (
        <div className="fallback-container">
            <h1>404</h1>
            <p className="oops-text">Oops! Page not found</p>
            <p className="description-text">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="home-button">
                Go Home
            </Link>
        </div>
    );
};

export default Fallback;
