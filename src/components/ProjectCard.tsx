import { ProjectCardProps } from "../interfaces";

function ProjectCard({
  name,
  stack,
  previewLink,
  sourceLink,
  screenShotUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div>
        <h3>{name}</h3>
        <p>{`${stack.join(` • `)}`}</p>
        {previewLink && (
          <p>
            <a href={previewLink} target="_blank">
              Live Preview
            </a>
          </p>
        )}
        {sourceLink && (
          <p>
            <a href={sourceLink} target="_blank">
              Source Code
            </a>
          </p>
        )}
      </div>
      {screenShotUrl && <img src={screenShotUrl} alt={`${name} Screenshot`} />}
    </div>
  );
}

export default ProjectCard;
