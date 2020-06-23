import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changeSelectedBar } from "../models";
import Dropdown from "../components/Dropdown";

class DropdownModule extends React.Component {
  render() {
    const { bars, changeSelectedBar } = this.props;

    return (
      <div>
        <Dropdown bars={bars} onChange={changeSelectedBar} />
      </div>
    );
  }
}

DropdownModule.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeSelectedBar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bars: state.ReactProgressBarAPI.barValues,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedBar: (selectedBarIndex) =>
    dispatch(changeSelectedBar(selectedBarIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownModule);
