import ProjectList from '../components/ProjectList';

const Projects = () => {
    return (
        <>
              <div className="container">
                <div className="projects">
                    <h2>Projects</h2>
                    <p>Please find listed below a list of my previous software projects:</p>
                    <ProjectList />
                </div>
                </div>
        </>
    );
};

export default Projects;