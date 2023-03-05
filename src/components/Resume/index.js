import React from 'react';
import resume from '../../assets/bazil-resume.pdf';

export default function Resume () {
    return (
        <div className="resume">
            <h1>Connor Bazil - Resume</h1>
            <p>Resume available to download <a href={resume}>here</a></p>
        </div>
    )
}