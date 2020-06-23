import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchData } from "../models";

import ProgressBarModule from "./ProgressBarModule";
import DropdownModule from "./DropdownModule";
import ButtonsModule from "./ButtonsModule";

class Root extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;

    if (fetchData) {
      fetchData();
    }
  }

  render() {
    return (
      <div
        style={{
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <header style={{ textAlign: "center" }}>
          <h2>React Progress Bar</h2>
        </header>
        <ProgressBarModule />
        <div
          style={{
            margin: 15,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DropdownModule />
          <ButtonsModule />
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(null, mapDispatchToProps)(Root);
