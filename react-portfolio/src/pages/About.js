import React from "react";
// import selfie from "../images/selfie.png"
// import motorcycle from "../images/motorcycle-camping.png"
// import hiking from "../images/palm-canyon.jpeg"
// import colombia from "../images/colombia.jpg"

function About() {
  return (
    <main className="container">
        <div className="row">
            <div className="col-md-8 mt-2">
                <div className="page-header mt-2">
                    <h1 className="text-white">About Me</h1>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    {/* <img src={selfie} alt="Pat Selfie" className="img-thumbnail"/> */}
                  </div>
                  <div className="col-md-9">
                      <p className="text-white">
                        Hola!
                        <br></br>
                        <br></br>
                        The purpose of this site is to highlight my recent full-stack development work and provide additional contact information if you'd like to get in touch. 
                        <br></br>
                        <br></br>
                        For some background about me, my career first started as an ESL teacher in South Korea. 안녕하세요! After a year abroad, I returned stateside to continue working in education and eventually found my first software industry job as a business analyst training end users on enterprise software solutions. Through years of experience in various roles, I developed my skills around customer engagement, analysis and SDLC management. 
                        <br></br>
                        <br></br>
                        Currently, I'm a Manager of Partner Enablement engaging with our network of partners to create value and deliver informatics solutions.
                        <br></br>
                        <br></br>
                        Check out a few portfolio examples on the Portfolio tab. Otherwise, you can reach me at (262) 501-3967 or pmoriarty100@gmail.com. Finally, see below to connect via LinkedIn or Github.
                        <br></br>
                        <br></br>
                        Cheers!
                      </p>
                  </div>
                </div>
              </div>

            <aside className="col-md-4">
                <div className="card mt-4">
                    {/* <img className="card-img-top" src={motorcycle} alt="motorcycle"/> */}
                    <div className="card-body">
                      <h5 className="card-title">Motorcycle Trips</h5>
                      <p className="card-text">I like motorcycle trips through national parks, especially camping!</p>
                    </div>
                </div>
                <div className="card mt-4">
                    {/* <img className="card-img-top" src={hiking} alt="palm trees"/> */}
                    <div className="card-body">
                    <h5 className="card-title">Hiking</h5>
                    <p className="card-text">I like hiking around San Diego. Palm Canyon in Borrego Springs is my favorite.</p>
                    </div>
                </div>
                <div className="card mt-4 mb-4">
                    {/* <img className="card-img-top" src={colombia} alt="
                    colombian bus"/> */}
                    <div className="card-body">
                        <h5 className="card-title">Travel</h5>
                        <p className="card-text">I enjoy international travel when possible. I'm always up to try new foods and meet new people.</p>
                    </div>
                </div>
              </aside>
            <div>   
          </div>
        </div>
    </main>
  );
}

export default About;