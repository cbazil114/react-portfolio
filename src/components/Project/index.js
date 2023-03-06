import React from 'react';

export default function Project(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}
        </p>
        <a href={props.deployedLink}>Deployed Link</a>
        <a href={props.githubLink}>Github Link</a>
      </div>
    );
  }