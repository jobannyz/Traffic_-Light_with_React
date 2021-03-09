//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Trafficlight from "./component/trafficLight.js";

//render your react application
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));
