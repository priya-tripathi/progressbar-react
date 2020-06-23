import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import shortid from "shortid";

import { changeBarValue } from "../models";

import Buttons from "../components/Buttons";

class ButtonsModule extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    const { changeBarValue } = this.props;
    if (changeBarValue) {
      changeBarValue(value);
    }
  }

  render() {
    const { buttons } = this.props;

    return (
      <div>
        {buttons.map((button) => (
          <React.Fragment key={shortid.generate()}>
            <Buttons
              key={shortid.generate()}
              value={button}
              onClick={this.handleButtonClick}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

ButtonsModule.propTypes = {
  buttons: PropTypes.array.isRequired,
  changeBarValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  buttons: state.ReactProgressBarAPI.buttons,
});

const mapDispatchToProps = (dispatch) => ({
  changeBarValue: (value) => dispatch(changeBarValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsModule);
