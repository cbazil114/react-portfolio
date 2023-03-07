import React from 'react';
import img1 from '../../assets/img/portfoliopage.png';
import img2 from '../../assets/img/notetaker.png';
import img3 from '../../assets/img/calendarapp.png';
import img4 from '../../assets/img/texteditor.png';
import img5 from '../../assets/img/codequiz.png';
import img6 from '../../assets/img/horiseon.png';
import Project from '../Project';

export default function Portfolio() {
    const projects=[
        {
            image: img4,
            title: "Text Editor",
            description: "Text editor application utilizing indexedDB",
            deployedLink: "https://floating-island-67376.herokuapp.com/",
            githubLink: "https://github.com/cbazil114/text-editor",
        },
        {
            image: img5,
            title: "Coding Quiz",
            description: "A coding quiz built using HTML, CSS, and JavaScript",
            deployedLink: "https://cbazil114.github.io/coding-quiz/",
            githubLink: "https://github.com/cbazil114/coding-quiz",
        },
        {
            image: img6,
            title: "Horiseon Homepage",
            description: "Basic webpage using CSS and HTML",
            deployedLink: "https://cbazil114.github.io/horiseon-homepage/",
            githubLink: "https://github.com/cbazil114/horiseon-homepage",
        },
        {
            image: img1,
            title: "Portfolio Page",
            description: "A basic portfolio page using HTML and CSS best practices.",
            deployedLink: "https://cbazil114.github.io/portfolio-page/",
            githubLink: "https://github.com/cbazil114/portfolio-page/",
        },
        {
            image: img2,
            title: "Note Taker",
            description: "Note taking application using Express.js for persistent data.",
            deployedLink: "https://damp-mountain-90978.herokuapp.com/",
            githubLink: "https://github.com/cbazil114/note-taker",
        },
        {
            image: img3,
            title: "Work Day Scheduler",
            description: "An application for a work day schedule utilizing APIs such as JQuery, moment.js, and Bootstrap.",
            deployedLink: "https://cbazil114.github.io/calendar-app/",
            githubLink: "https://github.com/cbazil114/calendar-app",
        },
    ]
    return(
        <div>
            {projects.map(app => {
                return <Project 
                image={app.image}
                title={app.title} 
                description={app.description} 
                deployedLink={app.deployedLink} 
                githubLink={app.githubLink} 
                />
            })}
        </div>
    )
}