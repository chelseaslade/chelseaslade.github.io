import cloudArchitect from "../pics/cloudArchitect.png";
import cloudDevelop from "../pics/cloudDevelop.png";
import cloudFoundations from "../pics/cloudFoundations.png";
import pdf from "../assets/cslade_resume_PDF.pdf";
import java from "../pics/javacute.svg";
import html from "../pics/htmlcute.svg";
import css from "../pics/csscute.svg"
import javascript from "../pics/jscute.svg";
import react from "../pics/reactcute.svg";

const About = () => {
    return (
        <>
              <div className="container">
                <div className="about">
                    <div className='aboutText'>
                    <h3>About</h3>
                    <p>Thank you for stopping by to read a little bit more about me! I am a motivated team-player with a longtime passion for science and technology who never wants to stop learning!</p>
                    <p>My main interests in software development include Java, SQL database management, and React. </p>
                    <div className="techSkillList">
                    <h4>Tech Skills</h4>
                    <ul>
                        <li><img src={java} alt="Java Icon in Cute Style" class="icon"/>Java</li>
                        <li><img src={html} alt="HTML Icon in Cute Style" class="icon"/>HTML</li>
                        <li><img src={css} alt="CSS Icon in Cute Style" class="icon"/>CSS</li>
                        <li><img src={javascript} alt="JavaScript Icon in Cute Style" class="icon"/>JavaScript</li>
                        <li><img src={react} alt="React Icon in Cute Style" class="icon"/>React</li>
                    </ul>
                    </div>
                    <h4>Additional Skills</h4>
                    <ul>
                        <li>Academic research and writing</li>
                        <li>Microsoft Office Suite</li>
                        <li>Mailchimp</li>
                        <li>Sage Accounting</li>
                    </ul>
                    <div className="certList">
                    <h4>Certifications</h4>
                    <ul>
                        <li><img src={cloudArchitect} alt="AWS Cloud Architect Badge" class="awsBadge" /></li>
                        <li><img src={cloudDevelop} alt="AWS Cloud Development Badge" class="awsBadge" /></li>
                        <li><img src={cloudFoundations} alt="AWS Cloud Foundations Badge" class="awsBadge" /></li>
                    </ul>
                    </div>
                    <div>
                        <h4>Interests and Hobbies</h4>
                        <p>There is more to me than just technology! I consider myself to be exceptionally curious and I am always exploring new ways to learn and express myself. Some of my favourites are below!</p>
                        <ul>
                            <li>Watercolour and acrylic painting</li>
                            <li>Literature, especially dystopian classics and horror</li>
                            <li>Gardening</li>
                            <li>Gaming (I love simulators!)</li>
                            </ul>
                    </div>
                    <p>Full employment and education background can be viewed below in my resume: </p>
                    <a href={pdf} target='_blank' rel="noopener noreferrer"><button className="genButton">View Resume</button></a>
                </div>
                </div>
                </div>
        </>
    );
};

    export default About;