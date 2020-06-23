import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    const selectedIndex = Number(e.target.value);

    if (onChange) {
      onChange(selectedIndex);
      this.setState({ selectedIndex });
    }
  }

  render() {
    const { bars } = this.props;
    const { selectedIndex } = this.state;
    // const shortid = require("shortid");
    // console.log(shortid.generate());
    return (
      <div>
        <select
          class="select-css"
          value={selectedIndex}
          onChange={this.handleChange}
        >
          {bars.map((bar, index) => (
            <option key={shortid.generate()} value={index}>
              {`Progress Bar ${index + 1}`}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
