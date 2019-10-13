import React from "react";

import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import PaginationItem from "../../components/PaginationItem";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PaginationItem />, div);
});

it("render number correctly", () => {
  const { getByTestId } = render(<PaginationItem text={1} type="number" />);
  expect(getByTestId("pagination-item")).toHaveTextContent("1");
});

it("render text correctly", () => {
  const { getByTestId } = render(<PaginationItem text="Next" type="text" />);
  expect(getByTestId("pagination-item")).toHaveTextContent("Next");
});

it("matches snapshot", () => {
  const tree = renderer.create(<PaginationItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
