import React, { Component } from "react";
import Directory from "../../components/directory/directory.component";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./homepage.styles.scss";
const HomePage = () => {
  return (
    <div className="homapage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
