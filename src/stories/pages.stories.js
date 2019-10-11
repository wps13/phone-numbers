import React from "react";

import { storiesOf } from "@storybook/react";
import NumberPage from "../components/NumberPage";

import { fakeNumbers } from "../utils/fakeData";

storiesOf("Pages", module).add(" Numbers Page", () => (
  <NumberPage data={fakeNumbers} />
));
