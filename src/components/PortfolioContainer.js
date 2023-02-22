import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import NavTabs from './NavTabs';

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');
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
  // return (<>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Navigation />}>
  //         <Route index element={<About />} />
  //         <Route path="portfolio" element={<Portfolio />} />
  //         <Route path="contact" element={<Contact />} />
  //         <Route path="resume" element={<Resume />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  //   <Footer/>
  //   </>
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
