import React from "react";

import ReactDOM from "react-dom";

import GetButton from "../../components/GetNumbersButton";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GetButton />, div);
});

it("render button correctly", () => {
  const { getByTestId } = render(<GetButton />);
  expect(getByTestId("button")).toHaveTextContent("Get Numbers");
});

it("matches snapshot", () => {
  const tree = renderer.create(<GetButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
