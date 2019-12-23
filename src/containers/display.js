import React, { Component } from "react";
import { connect } from "react-redux";

import { creators } from "../store/redux";
import InitialPage from "../components/InitialPage";
import NumberPage from "../components/NumberPage";

const { getNumbersRequest } = creators;

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, amount: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.requestNumbers = this.requestNumbers.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }
  requestNumbers() {
    const { page, amount } = this.state;
    const { getNumbers } = this.props;

    getNumbers(Number(page), Number(amount));
  }

  render() {
    const { numbers } = this.props;
    return (
      <>
        {numbers.length ? (
          <NumberPage data={numbers} />
        ) : (
          <InitialPage
            change={this.handleChange}
            requestNumbers={this.requestNumbers}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  numbers: state.generatedData,
  totalPages: state.totalPages
});

const mapDispatchToProps = dispatch => ({
  getNumbers: (page, amount) => dispatch(getNumbersRequest(page, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
