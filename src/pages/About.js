import cloudArchitect from "../pics/cloudArchitect.png";
import cloudDevelop from "../pics/cloudDevelop.png";
import cloudFoundations from "../pics/cloudFoundations.png";
import pdf from "../assets/cslade_resume_PDF.pdf";
import java from "../pics/javacute.svg";
import html from "../pics/htmlcute.svg";
import css from "../pics/csscute.svg"
import javascript from "../pics/jscute.svg";
import react from "../pics/reactcute.svg";
import paint from "../pics/paintcute.png";
import plant from "../pics/pottedplantcute.png";
import book from "../pics/bookcute.png";
import controller from "../pics/controllercute.png";

const About = () => {
    return (
        <>
              <div className="container">
                <div className="about">
                    <div className="introBox">
                    <div className='aboutText'>
                    <h2>About</h2>
                    <h3>Tech Skills</h3>
                    <div className="techSkillList">
                    <ul>
                        <li><img src={java} alt="Java Icon in Cute Style" className="icon"/>Java</li>
                        <li><img src={html} alt="HTML Icon in Cute Style" className="icon"/>HTML</li>
                        <li><img src={css} alt="CSS Icon in Cute Style" className="icon"/>CSS</li>
                        <li><img src={javascript} alt="JavaScript Icon in Cute Style" className="icon"/>JavaScript</li>
                        <li><img src={react} alt="React Icon in Cute Style" className="icon"/>React</li>
                    </ul>
                    </div>
                    <h3>Additional Skills</h3>
                    <div className="addSkills">
                    <ul>
                        <li>Academic research and writing</li>
                        <li>Microsoft Office Suite</li>
                        <li>Large-sum product sales</li>
                    </ul>
                    <ul>
                        <li>Mailchimp</li>
                        <li>Sage Accounting</li>
                    </ul>
                    </div>
                    <h3>Certifications</h3>
                    <div className="certList">
                    <ul>
                        <li><img src={cloudArchitect} alt="AWS Cloud Architect Badge" className="awsBadge" /></li>
                        <li><img src={cloudDevelop} alt="AWS Cloud Development Badge" className="awsBadge" /></li>
                        <li><img src={cloudFoundations} alt="AWS Cloud Foundations Badge" className="awsBadge" /></li>
                    </ul>
                    </div>
                    <div className="resumeLink">
                    <p>Full employment and education background can be viewed below in my resume: </p>
                    <a href={pdf} target='_blank' rel="noopener noreferrer"><button className="genButton">View Resume</button></a>
                    </div>
                    <h3>Interests and Hobbies</h3>
                    <div className="interestsList">
                        <ul>
                            <li><img src={paint} alt="Paint Icon in Cute Style" className="smallIcon"/>Watercolour and acrylic painting</li>
                            <div className="interestsAlt">
                            <li><img src={book} alt="Book Icon in Cute Style" className="smallIcon"/>Literature, especially dystopian classics and horror</li>
                            </div>
                            <li><img src={plant} alt="Potted Plant Icon in Cute Style" className="smallIcon"/>Gardening</li>
                             <div className="interestsAlt">
                            <li><img src={controller} alt="Game Controller Icon in Cute Style" className="smallIcon"/>Gaming (I love simulators!)</li>
                            </div>
                            </ul>
                    </div>
                </div>
                </div>
                </div>
                </div>
        </>
    );
};

    export default About;