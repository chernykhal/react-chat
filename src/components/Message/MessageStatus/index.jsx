import React from "react";
import PropTypes from "prop-types";

import readedSvg from "../../../assets/icons/readed.svg";
import unreadedSvg from "../../../assets/icons/unreaded.svg";

const MessageStatus = ({ isReaded }) => {
  return (
    <div className="message__status">
      {isReaded ? (
        <img src={readedSvg} alt="Прочитано" />
      ) : (
        <img src={unreadedSvg} alt="Не прочитано" />
      )}
    </div>
  );
};

MessageStatus.propTypes = {
  isReaded: PropTypes.bool,
};

export default MessageStatus;
