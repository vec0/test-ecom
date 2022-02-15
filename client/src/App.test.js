import { render, screen } from "@testing-library/react";
import { useLayoutEffect, useRef } from "react";
import App from "./App";
import { useEffect } from "react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const useLayoutEffectExample = () => {
  const ourDiv = useRef();

  useEffect(() => {
    console.log("useEffect");
    console.log(ourDiv.current.innerHtml);
  }, [ourDiv]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [ourDiv]);

  return (
    <div id="my-div" ref={ourDiv}>
      useLayoutEffect vs use Effect
    </div>
  );
};
