import { shallow } from "enzyme";
import React from "react";
import App from "./App";

//redux-mock-store

if (
  ("expect to render App component",
  () => {
    const mockStore = {
      robots: [],
      searchField: "",
    };
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
  })
);
