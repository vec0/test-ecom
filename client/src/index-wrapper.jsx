import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";

export default function IndexWrapper() {
  //state = { test: "IndexWrapper" };

  let location = useLocation();
  // let navigate = useNavigate();
  return <App location={location} />;
}
