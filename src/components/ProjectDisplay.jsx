
const ProjectDisplay = ({ project }) => {
  return (
    <div className="projectDisplay">
      <h4>{project.title}</h4>
      <img src={project.image} alt={project.title} className="projectImage" />
      <p>{project.tags.join(", ")}</p>
      <p>{project.description}</p>
      <a href={project.link}><button className="genButton">View on GitHub</button></a>
    </div>
  );
};

export default ProjectDisplay;