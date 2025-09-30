import github from "../pics/githubcute.svg"
import linkedin from "../pics/linkedincute.svg"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <a href="https://github.com/chelseaslade"><img src={github} alt="GitHub" className="socialIcon" /></a>
          <a href="www.linkedin.com/in/chelsea-slade-601a352a0"><img src={linkedin} alt="LinkedIn" className="socialIcon" /></a>
          <div className="attribution">
          <a href="https://icons8.com/">All Icons by icons8.com</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;