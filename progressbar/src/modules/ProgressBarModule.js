import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import shortid from "shortid";
import ProgressBars from "../components/ProgressBars";

class ProgressBarModule extends React.Component {
  render() {
    const { barValues, limit } = this.props;

    return (
      <div>
        {barValues.map((value, index) => (
          <React.Fragment key={shortid.generate()}>
            <ProgressBars value={value} limit={limit} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

ProgressBarModule.propTypes = {
  barValues: PropTypes.arrayOf(PropTypes.number),
  limit: PropTypes.number,
};

ProgressBarModule.defaultProps = {
  barValues: [],
  limit: 0,
};

const mapStateToProps = (state) => ({
  barValues: state.ReactProgressBarAPI.barValues,
  limit: state.ReactProgressBarAPI.limit,
});

export default connect(mapStateToProps, null)(ProgressBarModule);
