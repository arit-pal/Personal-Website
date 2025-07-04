import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <header className="header-content">
                <div className="header-name">
                    <a href="/">Arit Pal</a>
                </div>
                <div className="header-links">
                    <div className="header-about">
                        <a href="/about">About Me</a>
                    </div>
                    <div className="header-contact">
                        <a href={`mailto:arit.sde@proton.me`}>Contact</a>
                    </div>
                </div>
            </header>
            <main className="main-content">
                <h1>About Me</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </main>
            <footer className="footer-content">
                <p>© 2025 Arit Pal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;
