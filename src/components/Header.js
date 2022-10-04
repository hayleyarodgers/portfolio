import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  // Handle page change using currentPage state variable.
  const handlePageChange = (page) => setCurrentPage(page);

  // Depending on the value of currentPage, the corresponding component is rendered.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  return (
    <div>
      <header>
        <a href="/portfolio/#about">
          <h1>Hayley Rodgers</h1>
        </a>
        <i>Full stack web developer.</i>
        <hr className="mx-auto" />
        {/* Pass currentPage and the function to update it to Navigation. */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <hr className="mx-auto" />
        <br />
      </header>
      {/* Return a component. */}
      {renderPage()}
    </div>
  );
}
