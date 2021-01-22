import React from "react";
import classNames from "classnames";

import "./Block.scss";
import PropTypes from "prop-types";

const Block = ({ children, className }) => (
  <div className={classNames("block", className)}>{children}</div>
);

Block.propTypes = {
  className: PropTypes.string,
};

export default Block;
