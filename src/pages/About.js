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
                        <li><img src={java} alt="Java Icon in Cute Style" class="icon"/>Java</li>
                        <li><img src={html} alt="HTML Icon in Cute Style" class="icon"/>HTML</li>
                        <li><img src={css} alt="CSS Icon in Cute Style" class="icon"/>CSS</li>
                        <li><img src={javascript} alt="JavaScript Icon in Cute Style" class="icon"/>JavaScript</li>
                        <li><img src={react} alt="React Icon in Cute Style" class="icon"/>React</li>
                    </ul>
                    </div>
                    <h3>Additional Skills</h3>
                    <ul>
                        <li>Academic research and writing</li>
                        <li>Microsoft Office Suite</li>
                        <li>Mailchimp</li>
                        <li>Sage Accounting</li>
                    </ul>
                    <h3>Certifications</h3>
                    <div className="certList">
                    <ul>
                        <li><img src={cloudArchitect} alt="AWS Cloud Architect Badge" class="awsBadge" /></li>
                        <li><img src={cloudDevelop} alt="AWS Cloud Development Badge" class="awsBadge" /></li>
                        <li><img src={cloudFoundations} alt="AWS Cloud Foundations Badge" class="awsBadge" /></li>
                    </ul>
                    </div>
                    <div className="resumeLink">
                    <p>Full employment and education background can be viewed below in my resume: </p>
                    <a href={pdf} target='_blank' rel="noopener noreferrer"><button className="genButton">View Resume</button></a>
                    </div>
                    <h3>Interests and Hobbies</h3>
                    <div className="interestsList">
                        <ul>
                            <li><img src={paint} alt="Paint Icon in Cute Style" class="smallIcon"/>Watercolour and acrylic painting</li>
                            <li class="interestsAlt"><img src={book} alt="Book Icon in Cute Style" class="smallIcon"/>Literature, especially dystopian classics and horror</li>
                            <li><img src={plant} alt="Potted Plant Icon in Cute Style" class="smallIcon"/>Gardening</li>
                            <li class="interestsAlt"><img src={controller} alt="Game Controller Icon in Cute Style" class="smallIcon"/>Gaming (I love simulators!)</li>
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