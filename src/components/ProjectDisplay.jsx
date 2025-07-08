
const ProjectDisplay = ({ project }) => {
  return (
    <div className="projectDisplay">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} className="projectImage" />
      <p>{project.tags.join(", ")}</p>
      <p>{project.description}</p>
      <a href={project.link}><button>View on GitHub</button></a>
    </div>
  );
};

export default ProjectDisplay;