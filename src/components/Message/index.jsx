import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import readedSvg from "../../assets/icons/readed.svg";
import unreadedSvg from "../../assets/icons/unreaded.svg";

import "./Message.scss";

const Message = ({
  avatar,
  date,
  text,
  user,
  isOutgoing,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div
    className={classNames("message", {
      "message--outgoing": isOutgoing,
      "message--istyping": isTyping,
    })}
  >
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullname}`} />
    </div>
    <div className="message__content">
      <div className="message__bubble">
        {text && <p className={"message__text"}>{text}</p>}
        {isTyping && (
          <div className={"message__typing"}>
            <div className="bubble">
              <div className="bubbleDot"></div>
              <div className="bubbleDot"></div>
              <div className="bubbleDot"></div>
            </div>
          </div>
        )}
        {attachments && (
          <div className={"message__attachments"}>
            {attachments.map((attachment) => (
              <div className="message__attachment-item">
                <img src={attachment.url} alt={attachment.filename} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/*{date && (*/}
      {/*  <span className={"message__date"}>*/}
      {/*    {formatDistanceToNow(new Date(date), {*/}
      {/*      addSuffix: true,*/}
      {/*      locale: ruLocale,*/}
      {/*    })}*/}
      {/*  </span>*/}
      {/*)}*/}
    </div>
    {isOutgoing && (
      <div className="message__status">
        {isReaded ? (
          <img src={readedSvg} alt="Прочитано" />
        ) : (
          <img src={unreadedSvg} alt="Не прочитано" />
        )}
      </div>
    )}
  </div>
);

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  isReaded: PropTypes.bool,
  isOutgoing: PropTypes.bool,
  attachments: PropTypes.array,
};

Message.defaultProps = {
  user: {},
};

export default Message;
