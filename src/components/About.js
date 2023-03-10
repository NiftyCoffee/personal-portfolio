import './About.css';

const About = () => {
    return (
        <div class="about">
            <h2>About Me</h2>
            <h3>Get to know more about me!</h3>
            <div class="about-card">
                <div class="about-content">
                    <p>I'm Zoe Tay, a full-stack developer and Computer Science student currently studying at Monash University.
                    I like technology and design, and am interested in full-stack development.</p>
                    <p>Since I started coding about 1 1/2 years ago, I have been joining coding competitions, hackathons and 
                    building personal projects to gain new skills and get out of the comfort zone!</p>
                    <p>When I'm not coding, I make covers and put my own songs on Spotify sometimes.</p>
                </div>
                <span class="about-divider"></span>
                <div class="about-tech">
                    <p>Technologies I've been working with:</p>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>HTML & CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;