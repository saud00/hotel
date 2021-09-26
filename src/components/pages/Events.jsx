import React from "react";

const SlideData = [
  {
    id: 0,
    price: "$99",
    imgsrc: "./assets/events/dinnerparty.jpg",
    title: "Private parties",
    p: "Celebrate in the heart of Sydney Harbour at one of Australia’s most awarded restaurants ",
    l1: " with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House",
    l2: " From intimate dinner parties in the Private Dining Room, to large cocktail events in The Green Room",
    l3: "  larger seated events for 100 guests or elegant cocktail party receptions for up to 120 guests in the Green Room.",
  },
  {
    id: 1,
    price: "$299",
    imgsrc: "./assets/events/event-birthday.jpg",
    title: "Birthday parties",
    p: "Celebrate in the heart of Sydney Harbour at one of Australia’s most awarded restaurants ",
    l1: " with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House",
    l2: " From intimate dinner parties in the Private Dining Room, to large cocktail events in The Green Room",
    l3: "  larger seated events for 100 guests or elegant cocktail party receptions for up to 120 guests in the Green Room.",
  },
  {
    id: 2,
    price: "$555",
    imgsrc: "./assets/events/party2.jpg",
    title: "Wedding parties",
    p: "Celebrate in the heart of Sydney Harbour at one of Australia’s most awarded restaurants ",
    l1: " with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House",
    l2: " From intimate dinner parties in the Private Dining Room, to large cocktail events in The Green Room",
    l3: "  larger seated events for 100 guests or elegant cocktail party receptions for up to 120 guests in the Green Room.",
  },
];

export default function Events() {
  const bg = require("../../styles/img/events-bg.jpg");
  const about = require("../../styles/img/about.jpg");

  const len = SlideData.length - 1;
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      setActive(active >= len ? 0 : (prevState) => prevState + 1);
    }, 3000);
    return () => clearTimeout(interval);
  }, [active]);

  return (
    <div
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)),  url(${'assets/events-bg.jpg'})`,
        height: "100%",
      }}
    >
      <div className="container ">
        <div className="row bg-dark p-5">
          <h6 className="text-light lh-4">Events to remember ______</h6>
          <h3
            style={{
              color: "sandybrown",
              lineHeight: "10vh",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "36px",
            }}
          >
            Organize Your Events in our Restaurant
          </h3>
        </div>
      </div>

      {SlideData.map(
        (val) =>
          val.id === active && (
            <div className="d-flex flex-md-nowrap flex-wrap ">
              <div className="col-md-6 col-12 p-5">
                <img
                  src={`${val.imgsrc}`}
                  alt="slider"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-md-6 col-12 p-5">
                <div
                  className=" p-4"
                  style={{ height: "100%", width: "100%", color: "white" }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: "700",
                      color: "sandybrown",
                      fontSize: "36px",
                    }}
                  >
                    {val.title}
                  </h3>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: "700",
                      color: "white",
                      textDecoration: "underline",
                      fontSize: "36px",
                    }}
                  >
                    {val.price}
                  </h3>
                  <p>{val.p}</p>
                  <ul>
                    <li>{val.l1}</li>
                    <li>{val.l2}</li>
                    <li>{val.l3}</li>
                  </ul>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
