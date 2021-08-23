import React from "react";
import "./Project.css";

function ProjectUI(props) {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="" className="card-img-top" />
        </div>

        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>

          <a
            href={props.livelink}
            className="live"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Link
          </a>
          <a
            href={props.sourcecode}
            className="source"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectUI;
