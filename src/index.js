// <-----------OLD------------>

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

// <-----------NEW----------->

import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./components/App";

createRoot(document.getElementById('root')).render(<App />)




