import React from "react";
import { storiesOf } from "@storybook/react";

import NumberCard from "../components/NumberCard";
import DataInput from "../components/DataInput";
import GetNumbersButton from "../components/GetNumbersButton";
import PaginationItem from "../components/PaginationItem";
import Pagination from "../components/Pagination";

storiesOf("Components", module)
  .add("Number card", () => <NumberCard number={555000013} cost={1.13} />)
  .add("Input Page", () => (
    <DataInput
      text="Page"
      change={e => {
        console.log(e.target.value);
      }}
    />
  ))
  .add("Input Per Page", () => (
    <DataInput
      text="Numbers Per Page"
      change={e => {
        console.log(e.target.value);
      }}
    />
  ))
  .add("Get numbers", () => (
    <GetNumbersButton
      action={() => {
        console.log("clicked");
      }}
    />
  ))
  .add("Page Number", () => <PaginationItem text={1} type="number" />)
  .add("Next Page", () => <PaginationItem text="Next" type="text" />)
  .add("Previous Page", () => <PaginationItem text="Previous" type="text" />)
  .add("Pagination", () => <Pagination />);
