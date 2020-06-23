import React from "react";
import PropTypes from "prop-types";

class ProgressBars extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { value } = this.props;
    if (nextProps.value === value) {
      return false;
    }

    return true;
  }

  render() {
    const { value, limit } = this.props;
    const barWidth = value >= limit ? 100 : Math.floor((value / limit) * 100);
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const barColor = value > limit ? "red" : randomColor;

    return (
      <div
        className="bar-box"
        style={{
          maxWidth: 400,
          border: "1px solid #666666",
          margin: 15,
          //background: "#d8d8d8",
          //border-radius: 20,
        }}
      >
        <div
          className="bar"
          style={{
            width: `${barWidth}%`,
            background: `${barColor}`,
            height: 30,
            textAlign: "center",
            transform: "translateX(0px)",
            transition: "width 2s",
          }}
        >
          <span
            style={{
              color: "white",
              lineHeight: "22px",
            }}
          >
            {`${value}%`}
          </span>
        </div>
      </div>
    );
  }
}

ProgressBars.propTypes = {
  value: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default ProgressBars;
