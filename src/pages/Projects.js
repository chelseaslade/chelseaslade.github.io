import React from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {
    return (
        <>
              <div className="container">
                <div className="projects">
                    <h3>Projects</h3>
                    <p>Below are some of my recent software projects:</p>
                    <ProjectList />
                </div>
                </div>
        </>
    );
};

    export default Projects;