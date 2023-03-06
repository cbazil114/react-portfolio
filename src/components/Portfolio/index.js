import React from 'react';
import img1 from '../../assets/img/githubLogo.png';
import Project from '../Project';

export default function Portfolio() {
    const projects=[
        {
            image: img1,
            title: "Test Title",
            description: "This is a test",
            deployedLink: "https://www.google.com",
            githubLink: "https://github.com/cbazil114?tab=repositories",
        }
    ]
    return(
        <div>
            {projects.map(app => {
                return <Project 
                title={app.title} 
                description={app.description} 
                deployedLink={app.deployedLink} 
                githubLink={app.githubLink} 
                />
            })}
        </div>
    )
}