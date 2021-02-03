import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { Avatar, MessageStatus, Time } from "../../index";

import "./DialogItem.scss";

const DialogItem = ({
  user,
  message,
  unReaded,
  isOutgoing,
  created_at,
  onSelectDialog,
}) => {
  const isReaded = true;
  const { _id, fullname, isOnline, avatar } = user;
  const selectedDialog = useSelector(({ dialogs }) => dialogs.activeDialog);

  const onClickDialog = () => {
    onSelectDialog(_id);
  };

  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": isOnline,
        active: _id === selectedDialog,
      })}
      onClick={onClickDialog}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{fullname}</b>
          <span className={"dialogs__item-info-date"}>
            <Time date={created_at} />
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message}</p>
          {isOutgoing && <MessageStatus isReaded={isReaded} />}
          {!isOutgoing && unReaded > 0 && (
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
  message: PropTypes.string,
};

DialogItem.defaultProps = {
  user: {},
  message: {},
};

export default DialogItem;
