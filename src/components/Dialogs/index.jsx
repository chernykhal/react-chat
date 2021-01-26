import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import DialogItem from "./DialogItem";

import readedSvg from "../../assets/icons/readed.svg";
import unreadedSvg from "../../assets/icons/unreaded.svg";

import "./Dialogs.scss";

const Dialogs = ({ dialogs }) => {
  return (
    <div className={"dialogs"}>
      {dialogs &&
        dialogs.map((dialogItem, index) => (
          <DialogItem key={index} {...dialogItem} />
        ))}
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.array,
};

Dialogs.defaultProps = {
  dialogs: [],
};

export default Dialogs;
