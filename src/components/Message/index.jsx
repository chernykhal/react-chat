import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Avatar, MessageStatus } from "../index";
import MessageAudio from "./MessageAudio";

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
  audio,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--outgoing": isOutgoing,
        "message--istyping": isTyping,
        "message--audio": audio,
        "message--image": attachments && attachments.length === 1,
      })}
    >
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__content">
        {text || isTyping || audio ? (
          <div className="message__bubble">
            {!audio && text && <p className={"message__text"}>{text}</p>}
            {audio && <MessageAudio audio={audio} />}
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
                    key={Math.random()}
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
                  key={Math.random()}
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
};
Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  isReaded: PropTypes.bool,
  isOutgoing: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
  attachments: PropTypes.array,
};

Message.defaultProps = {
  user: {},
};

export default Message;
