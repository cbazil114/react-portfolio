import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import NavTabs from './NavTabs';
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <main>
      <Header />
      <section>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </section>
      <Footer />
      </main>
      {renderPage()}
    </div>
  );
}
