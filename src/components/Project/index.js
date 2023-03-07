import React from 'react';

export default function Project(props) {
  const cardStyle = {
    width: '18rem',
  };
    return (
      <div className="container">
        <div className="card" style={cardStyle}>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-text">{props.description}
        </p>
        <img className="card-img" src={props.image} />
        <a className="card-link" href={props.deployedLink}>Deployed Link</a>
        <a className="card-link" href={props.githubLink}>Github Link</a>
      </div>
      </div>
    );
  }