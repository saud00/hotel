import React from "react";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const loadPage = document.getElementById("loader");
  const body = document.getElementById("root");

  React.useEffect(() => {
    setTimeout(() => {
      console.log("here is loader");
      loadPage.className = "d-none";
      body.className = "d-block";
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
