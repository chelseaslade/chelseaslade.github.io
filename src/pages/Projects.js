import SearchByTag from '../components/SearchByTag';

const Projects = () => {
    return (
        <>
              <div className="container">
                <div className="projects">
                    <h2>Projects</h2>
                    <p>Please find listed below a list of my previous software projects:</p>
                    <SearchByTag />
                </div>
                </div>
        </>
    );
};

export default Projects;