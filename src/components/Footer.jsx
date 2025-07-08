import github from "../pics/github.svg"
import linkedin from "../pics/linkedin.svg"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <a href="https://github.com/chelseaslade"><img src={github} alt="GitHub" className="socialIcon" /></a>
          <a href="www.linkedin.com/in/chelsea-slade-601a352a0"><img src={linkedin} alt="LinkedIn" className="socialIcon" /></a>
        </footer>
      </div>
    </>
  );
};

export default Footer;