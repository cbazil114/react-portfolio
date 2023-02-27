// import { useState, useEffect } from 'react';
// import { Link, Outlet } from 'react';
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
          <a
            href="https://github.com/cbazil114"
            target="_blank"
            rel="noreferrer"
          >
            <p>Github</p>
          </a>
          </div>
          <div>
          <a
            href="https://www.linkedin.com/in/connor-bazil-415b9440/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LinkedIn</p>
          </a>
          </div>
          <div>
          <a
            href="https://twitter.com/conbazil"
            target="_blank"
            rel="noreferrer"
          >
            <p>Twitter</p>
          </a>

      </div>
    </footer>
  );
}