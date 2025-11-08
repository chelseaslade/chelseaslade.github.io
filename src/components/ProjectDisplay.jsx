
const ProjectDisplay = ({ project }) => {

  const handleClick = () => {
  window.open(project.link, "_blank", "noopener, noreferrer");
  };

  return (
    <div className="projectDisplay">
      <div className="projectContainer">
      <h4>{project.title}</h4>
      <img src={project.image} alt={project.title + " image"} className="projectImage" />
      <p>Tags: {project.tags.join(", ")}</p>
      <p>Description: {project.description}</p>
      <button onClick={handleClick} className="genButton" id="projectLink">View on GitHub</button>
      </div>
    </div>
  );
};

export default ProjectDisplay;