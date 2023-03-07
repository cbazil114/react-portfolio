import React from 'react';
import picture from '../../assets/img/schoolpic.jpg';

export default function About() {
    return (
      <div>
        <h1 className="title">About</h1>
        <p>
        Hello, and welcome to my portfolio page. My name is Connor Bazil, and I am currently a student at the UNH Coding Bootcamp.

        My education began with a Bachelor's Degree in English, also at UNH, where I graduated in 2016. From there, I pursued an interest in film and finally obtained a Master's Degree in Writing for Film and Television from Emerson College. After a couple of years working in content development for a production company, I found that I did not have the same passion I once had, and I have decided to explore another interest of mine - computer science!
        </p>
        <img className="picture" src={picture} alt="Connor"/>
      </div>
    );
  }