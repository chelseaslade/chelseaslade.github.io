import React from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {
    return (
        <>
              <div className="container">
                <div className="projects">
                    <h2>Projects</h2>
                    <p>Below are some of my recent software projects:</p>
                    <ProjectList />
                </div>
                </div>
        </>
    );
};

    export default Projects;