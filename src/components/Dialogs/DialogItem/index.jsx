import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { MessageStatus, Time } from "../../index";

import "./DialogItem.scss";

const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={`${avatar}`} alt="" />;
  } else {
    //make avatar
  }
};

const DialogItem = ({ user, message, unReaded }) => {
  const { fullname, isOnline, avatar } = user;
  const { text, isReaded, isOutgoing, createdAt } = message;
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {getAvatar(avatar)}
        {/*<img src={user.avatar} alt={`${user.fullName} avatar`} />*/}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{fullname}</b>
          <span className={"dialogs__item-info-date"}>
            {/*<Time date={createdAt} />*/}Сейчас
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isOutgoing && <MessageStatus isReaded={isReaded} />}
          {unReaded > 0 && (
            <div className="dialogs__item-info-unread">
              <span>{unReaded >= 10 ? "+9" : unReaded}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

DialogItem.propTypes = {
  user: PropTypes.object,
  message: PropTypes.object,
};

DialogItem.defaultProps = {
  user: {},
  message: {},
};

export default DialogItem;
