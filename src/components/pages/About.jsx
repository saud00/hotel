import React from "react";

export default function About() {
  const bg = require("../../styles/img/about-bg.jpg");
  const about = require("../../styles/img/about.jpg");
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      <div className="bg-brown h-100 w-100  text-white ">
        <div className="text-center">
          <h1>About Us</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div
              className="col-md-6 col-12 lh-md"
              style={{ textAlign: "justify" }}
            >
              <p className="lead">
                Quay is one of the country’s most celebrated restaurants; the
                creation of leading Australian restaurant group, Fink, and
                Executive Chef Peter Gilmore.
              </p>
              <p className="lead">
                The restaurant is an organic space reflective of Peter Gilmore’s
                nature inspired cuisine. The interplay of textures and colour
                brings life and a vibrance that embraces the restaurant’s place
                in the dress circle of Sydney Harbour. An ode to the Australian
                landscape, from the vast ocean floor, to the cracked bark of a
                paperbark tree, every detail from the ground up has been
                thoughtfully considered.
              </p>
            </div>

            <div className="col-md-6 col-12">
              <div className="container aboutCont">
                <div className="leftBox"></div>
                <div>
                  <img
                    src={about}
                    alt="img"
                    width="100%"
                    height="100%"
                    className="aboutImg"
                  />
                </div>
                <div className="RightBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
