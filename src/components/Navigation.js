import React from 'react';

// Destructure props object to get currentPage state variable and method for handling page change.
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Use ternary operator to check if the current page is "About".
          // If it is, use Bootstrap's active link class.
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Use ternary operator to check if the current page is "Portfolio".
          // If it is, use Bootstrap's active link class.
          className={
            currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }>
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Use ternary operator to check if the current page is "Resume".
          // If it is, use Bootstrap's active link class.
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Use ternary operator to check if the current page is "Contact".
          // If it is, use Bootstrap's active link class.
          className={
            currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
          }>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
