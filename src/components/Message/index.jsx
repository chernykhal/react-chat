import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Message.scss";
import { MessageStatus, Time } from "../index";

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
      "message--image": attachments && attachments.length === 1,
    })}
  >
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullname}`} />
    </div>
    <div className="message__content">
      {text || isTyping ? (
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
                <div
                  className="message__attachment-item"
                  style={{ backgroundImage: `url(${attachment.url})` }}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        attachments && (
          <div className={"message__attachments"}>
            {attachments.map((attachment) => (
              <div
                className="message__attachment-item"
                style={{ backgroundImage: `url(${attachment.url})` }}
              />
            ))}
          </div>
        )
      )}
      {/*{date && <Time date={date} />}*/}
    </div>
    {isOutgoing && <MessageStatus isReaded={isReaded} />}
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
