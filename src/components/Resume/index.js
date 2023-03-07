import React from 'react';
import resume from '../../assets/bazil-resume.pdf';

export default function Resume () {
    return (
        <div className="resume">
            <h1>Connor Bazil - Resume</h1>
            <p>Resume available to download <a href={resume}>here</a></p>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML/CSS/JavaScript</li>
                <li>APIs - Web/Third-Party/Server-Side</li>
                <li>NodeJS</li>
                <li>OOP</li>
                <li>Express</li>
                <li>SQL, NoSQL</li>
                <li>MVC</li>
                <li>React/MERN</li>

            </ul>
        </div>
    )
}