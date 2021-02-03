import React from "react";
import { Empty, Spin, Tooltip } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { Message } from "../index";
import DialogWindowInput from "./DialogWindowInput/DialogWindowInput";

import "./DialogWindow.scss";
import { fetchMessagesFromDialog } from "../../redux/actions/messages";

const DialogWindow = () => {
  const dialogWindowScrollRef = React.useRef(null);
  const items = useSelector(({ messages }) => messages.items);
  const selectedDialog = useSelector(({ dialogs }) => dialogs.activeDialog);
  const isLoading = useSelector(({ messages }) => messages.isLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMessagesFromDialog(selectedDialog));
  }, [selectedDialog]);

  React.useEffect(() => {
    if (dialogWindowScrollRef.current) {
      dialogWindowScrollRef.current.scrollTo(0, 99999999999999);
    }
  }, [isLoading]);

  return (
    <div className="dialog-window">
      {!isLoading && selectedDialog ? (
        <React.Fragment>
          <div className="dialog-window__header">
            <div className="dialog-window__header-info">
              <h3 className={"dialog-window__header-title"}>Гай Юлий Цезарь</h3>
              <span className={"dialog-window__header-status"}>в сети</span>
            </div>
            <button className="dialog-window__header-options-button">
              <Tooltip title="Настройки">
                <EllipsisOutlined
                  style={{ fontSize: "36px", color: "#5e5e5e" }}
                />
              </Tooltip>
            </button>
          </div>
          <div className="dialog-window__messages" ref={dialogWindowScrollRef}>
            {items.map((message) => (
              <Message
                key={message._id}
                text={message.text}
                date={message.created_at}
                user={{
                  _id: 2,
                  fullname: message.user.fullname,
                  avatar: message.user.avatar,
                }}
                isOutgoing={false}
              />
            ))}
          </div>
          <DialogWindowInput />
        </React.Fragment>
      ) : !isLoading ? (
        <div className={"dialog-window__empty"}>
          <Empty description={"Выберите диалог, чтобы начать общение"} />
        </div>
      ) : (
        <div className={"dialog-window__loading"}>
          <Spin tip="Загрузка..."></Spin>
        </div>
      )}
    </div>
  );
};

export default DialogWindow;
