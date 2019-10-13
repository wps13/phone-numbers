import React from "react";

import ReactDOM from "react-dom";

import NumberCard from "../../components/NumberCard";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NumberCard />, div);
});

it("render card correctly", () => {
  const { getByTestId } = render(<NumberCard number="555000001" cost="1.01" />);
  expect(getByTestId("number-card")).toHaveTextContent(
    "Number: 555000001 cost: 1.01"
  );
});

it("matches snapshot", () => {
  const tree = renderer.create(<NumberCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
