import React from "react";
import moduleName from 'module'

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${'/assets/about-bg.jpg'})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        height: "100%",
      }}
    >
      <div className="bg-brown h-100 w-100 mb-4 text-white ">
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
              <div className=" aboutCont">
                <div className="leftBox"></div>
                <div className="aboutImg">
                  <img src='./assets/about.jpg' alt="img" width="100%" height="100%" />
                </div>
                <div className="RightBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why us
       */}

      <div
        className="container-fluid bg-dark p-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="row">
          <h6 className="text-light lh-4">WHY US ______</h6>
          <h3
            style={{
              color: "sandybrown",
              lineHeight: "10vh",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "36px",
            }}
          >
            Why choose our restaurant
          </h3>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 ">
            <div className="card card-body card-effect">
              <div className="mt-5 mb-4">
                <h3 style={{ color: "sandybrown", lineHeight: "6vh" }}>01</h3>
                <h2>
                  <b>Lorem Ipsum</b>
                </h2>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div className="card card-body card-effect">
              <div className="mt-5 mb-4">
                <h3 style={{ color: "sandybrown", lineHeight: "6vh" }}>02</h3>
                <h2>
                  <b>Lorem Ipsum</b>
                </h2>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div className="card card-body card-effect">
              <div className="mt-5 mb-4">
                <h3 style={{ color: "sandybrown", lineHeight: "6vh" }}>03</h3>
                <h2>
                  <b>Lorem Ipsum</b>
                </h2>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
