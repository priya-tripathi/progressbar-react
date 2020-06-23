import React from "react";
import PropTypes from "prop-types";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    const { value } = this.state;
    if (onClick) {
      onClick(value);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <button type="button" onClick={this.handleClick}>
        {value > 0 ? value : +value}
      </button>
    );
  }
}

Buttons.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  value: 10,
};

export default Buttons;
