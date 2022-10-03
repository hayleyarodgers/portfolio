import React from "react";

export default function Project(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="card rounded-0 mb-5 px-0" key={project.id}>
          <img
            className="card-img-top"
            src={project.screenshot}
            alt="Project screenshot"
          />
          <div className="card-body">
            <h3 className="card-title">{project.name}</h3>
            <i className="card-text">{project.technologies}</i>
            <p className="card-text">{project.description}</p>
            <a href={project.repoURL} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-lg btn-primary mx-2 rounded-0">
                CODE
              </button>
            </a>
            {project.liveAppURL ? (
              <a
                href={project.liveAppURL}
                target="_blank"
                rel="noopener noreferrer">
                <button className="btn btn-lg btn-primary mx-2 rounded-0">
                  LIVE APP
                </button>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
