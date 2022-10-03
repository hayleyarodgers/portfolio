import React from "react";
import Project from "./Project";
import techBlogScreenshot from "../../assets/images/techBlogScreenshot.png";
import pawfectMatchScreenshot from "../../assets/images/pawfectMatchScreenshot.png";
import recipeFindrScreenshot from "../../assets/images/recipeFindrScreenshot.png";
import socialMediaAPIScreenshot from "../../assets/images/socialMediaAPIScreenshot.png";
import textEditorScreenshot from "../../assets/images/textEditorScreenshot.png";
import weatherDashboardScreenshot from "../../assets/images/weatherDashboardScreenshot.png";

const projects = [
  {
    id: 1,
    name: "Tech blog",
    technologies: "Node.js, Express.js, Sequelize, Handlebars, Bootstrap",
    description:
      "Full stack application where developers can publish and comment on blog posts.",
    repoURL: "https://github.com/hayleyarodgers/tech-blog",
    liveAppURL: "https://hayleyarodgers-tech-blog.herokuapp.com/",
    screenshot: techBlogScreenshot,
  },
  {
    id: 2,
    name: "Pawfect Match",
    technologies: "Node.js, Express.js, Sequelize, Handlebars, Bootstrap",
    description:
      "Full stack application that matches pets needing adoption with new owners.",
    repoURL: "https://github.com/hayleyarodgers/pawfect-match",
    liveAppURL: "https://pawfect---match.herokuapp.com/",
    screenshot: pawfectMatchScreenshot,
  },
  {
    id: 3,
    name: "Recipe Findr",
    technologies:
      "Javascript, Bootstrap, Fetch API, Youtube API, Spoonacular API",
    description:
      "Front end application that gives users video tutorials for recipes that use ingredients they have at hand.",
    repoURL: "https://github.com/hayleyarodgers/recipe-finder",
    liveAppURL: "https://hayleyarodgers.github.io/recipe-finder/",
    screenshot: recipeFindrScreenshot,
  },
  {
    id: 4,
    name: "Social Network API",
    technologies: "Node.js, Express.js, MongoDB, Mongoose",
    description: "Back end for a social network web application.",
    repoURL: "https://github.com/hayleyarodgers/social-network-api",
    screenshot: socialMediaAPIScreenshot,
  },
  {
    id: 5,
    name: "Text Editor",
    technologies: "Webpack, Workbox, PWAs, IndexedDB",
    description:
      "Progressive web application for taking notes with or without an internet connection.",
    repoURL: "https://github.com/hayleyarodgers/pwa-text-editor",
    liveAppURL: "https://hayleyarodgers-pwa-text-editor.herokuapp.com/",
    screenshot: textEditorScreenshot,
  },
  {
    id: 6,
    name: "Weather Dashboard",
    technologies: "Javascript, Bootstrap, Moment.js, OpenWeather API",
    description:
      "Front-end application that shows the current and predicted weather for a selected city.",
    repoURL: "https://github.com/hayleyarodgers/weather-dashboard",
    liveAppURL: "https://hayleyarodgers.github.io/weather-dashboard/",
    screenshot: weatherDashboardScreenshot,
  },
];

export default function Portfolio() {
  return (
    <main>
      <h2>My portfolio</h2>
      <p className="mb-5">Check out some of my most recent projects below.</p>
      <div className="card-deck">
        <Project projects={projects} />
      </div>
    </main>
  );
}
