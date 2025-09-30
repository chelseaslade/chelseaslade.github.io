import ProjectDisplay from "./ProjectDisplay";
import projects from "../data/projects.json";

const ProjectList = () => {
  return (
    <div className="projectList">
      {projects.map((project, index) => (
        <ProjectDisplay key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
