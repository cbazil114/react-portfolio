import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react';

function Footer(){

    const [number,setNumber] = useState(1);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setNumber((number)=>number+1)
    //     },1000)
    // },[number])

    return(<div className="navBarLinks">
        <h1>I've rendered {number} times</h1>
        <nav>
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resumé</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>)
// put an avatar and your name up here

}

export default Footer