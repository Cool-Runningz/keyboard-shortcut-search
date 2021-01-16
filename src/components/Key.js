import React from "react";
import PropTypes from "prop-types";

const Key = (props) => {
  return (
    <kbd className="mac-key-large">
      <span className="font-lg"> {props.symbol || " "} </span>
      <span className="font-md">{props.name}</span>
    </kbd>
  );
};

Key.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string
};

export default Key;
