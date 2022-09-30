import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Depending on the value of currentPage, the corresponding component is rendered.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // Handle page change using currentPage state variable.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass currentPage and the function to update it to NavTabs. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Return a component. */}
      {renderPage()}
    </div>
  );
}
