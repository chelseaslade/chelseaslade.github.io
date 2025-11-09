
const ProjectDisplay = ({ project }) => {

  const handleClick = () => {
  window.open(project.link, "_blank", "noopener, noreferrer");
  };

  const imageSrc = project.image ? require(`../${project.image}`) : null;

  return (
    <div className="projectDisplay">
      <div className="projectContainer">
      <h4>{project.title}</h4>
      <div className="imageContainer">
      {imageSrc && <img src={imageSrc} alt={project.title} className="projectImage" />}</div>
      <p>Tags: {project.tags.join(", ")}</p>
      <p>Description: {project.description}</p>
      <button onClick={handleClick} className="genButton" id="projectLink">View on GitHub</button>
      </div>
    </div>
  );
};

export default ProjectDisplay;