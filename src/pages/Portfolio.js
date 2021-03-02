import React from "react";
import Project from "../components/projects.js"
import spaceinvaders from "../images/intro.png"
import tonelist from "../images/videos.png"
import weather from "../images/weather.png"
import employeetracker from "../images/node_ET.png"
import burgerlogger from "../images/burger.png"
import workdayscheduler from "../images/wds.png"

const devprojects = [
  {
    id: 1,
    name: "Space Invaders",
    description: "Group project adapted from Space Invaders javascript tutorial using Node and JavaScript. Can you beat the high score?!",
    image: spaceinvaders,
    repository: "https://github.com/dwmkerr/spaceinvaders",
    deployed: "https://project-two-pat-glenn-amanda.herokuapp.com/",
  },
  {
    id: 2,
    name: "Tonelist",
    description: "Group project to create a website to store your favorite bands and find info like tour dates, videos and similar artists.",
    image: tonelist,
    repository: "https://github.com/AlignSD/Tonelist",
    deployed: "https://alignsd.github.io/Tonelist/index.html",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "This weather dashboard provides the current weather of any searched city worldwide including a 5-day forecast.",
    image: weather,
    repository: "https://github.com/pmo48/weather-dashboard-pbm",
    deployed: "https://github.com/pmo48/weather-dashboard-pbm",
  },
  {
    id: 4,
    name: "Employee Tracker",
    description: "A CLI app for company admins that need to keep track of employee information. Uses Node and MySQL.",
    image: employeetracker,
    repository: "https://github.com/pmo48/employee-tracker",
    deployed: "https://drive.google.com/file/d/1rQV3wgEWzUHBW4n0afpHe-_JRjjda1qf/view",
  },
  {
    id: 5,
    name: "Burger Logger",
    description: "An app for serious burger eaters. Also, use of MySQL, Node, Express, Handlebars and a homemade ORM deployed on Heroku.",
    image: burgerlogger,
    repository: "https://github.com/pmo48/burger-logger",
    deployed: "https://glacial-eyrie-30428.herokuapp.com/",
  },
  {
    id: 6,
    name: "Work Day Scheduler",
    description: "This work day scheduler is intended to provide a basic workday scheduler that stores notes in local storage and updates the timeblocks based on time of day.",
    image: workdayscheduler,
    repository: "https://github.com/pmo48/work-day-scheduler-pbm",
    deployed: "https://pmo48.github.io/work-day-scheduler-pbm/",
  },

];

function Portfolio() {
  return (
    <main className="container">
      <br></br>
       <br></br>
       <br></br>
     <div className="row text-white mt-2">
        <h1 className="mt-2">
          Portfolio
        </h1>
        <p>
          Welcome to my portfolio page. Below you'll find my transition as I gradually improve my development skills through progressively more complicated projects. Enjoy!
        </p>
      </div>
    <div>
    <Project devprojects={devprojects}/>
    </div>
    </main>
  );
}

export default Portfolio;