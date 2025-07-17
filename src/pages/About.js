import cloudArchitect from "../pics/cloudArchitect.png";
import cloudDevelop from "../pics/cloudDevelop.png";
import cloudFoundations from "../pics/cloudFoundations.png";

const About = () => {
    return (
        <>
              <div className="container">
                <div className="about">
                    <div className='aboutText'>
                    <h3>About</h3>
                    <p>Hello! My name is Chelsea Slade, and I'm a Software Developer. </p>
                    <h4>Skills</h4>
                    <ul>
                        <li>Java</li>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <div className="certList">
                    <h4>Certifications</h4>
                    <ul>
                        <li><img src={cloudArchitect} alt="AWS Cloud Architect Badge" class="awsBadge" /></li>
                        <li><img src={cloudDevelop} alt="AWS Cloud Development Badge" class="awsBadge" /></li>
                        <li><img src={cloudFoundations} alt="AWS Cloud Foundations Badge" class="awsBadge" /></li>
                    </ul>
                    </div>
                <p></p>
                <p>I look forward to a continued career in the amazing technology industry here in Newfoundland and
                Labrador!</p>
                </div>
                </div>
                </div>
        </>
    );
};

    export default About;