import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <main>
    <div className="row row-cols-1 row-cols-md-2">
      {props.devprojects.map(item => (
        <div className="col mb-4">
        <div className="card" key={item.id}>
          <img src={item.image} className="card-img-top" alt="burger app screenshot"/>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}
            </p>
            <a href={item.repository} target="_blank" className="btn btn-primary">Repository</a>
            <a href={item.deployed} target="_blank" className="btn btn-success">Deployed App</a>
          </div>
        </div>
        </div>
        ))}
     </div>
  </main>

  );
}

export default Projects;
