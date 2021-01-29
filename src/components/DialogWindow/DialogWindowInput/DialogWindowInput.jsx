import React from "react";
import { Input, Tooltip } from "antd";
import {
  AudioOutlined,
  CameraOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const DialogWindowInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="dialog-window__input">
      <Input
        size={"large"}
        placeholder="Введите текст сообщения..."
        onChange={onChangeInput}
        value={inputValue}
        prefix={
          <SmileOutlined
            className="site-form-item-icon"
            style={{ fontSize: "18px", color: "#CBCBCB" }}
          />
        }
        suffix={
          <div className={"message-input-buttons"}>
            <Tooltip title="Снимок">
              <CameraOutlined style={{ fontSize: "18px", color: "#CBCBCB" }} />
            </Tooltip>
            {!inputValue ? (
              <Tooltip title="Голосовое сообщение">
                <AudioOutlined style={{ fontSize: "18px", color: "#CBCBCB" }} />
              </Tooltip>
            ) : (
              <Tooltip title="Отправить">
                <SendOutlined style={{ fontSize: "18px", color: "#CBCBCB" }} />
              </Tooltip>
            )}
          </div>
        }
      />
    </div>
  );
};

export default DialogWindowInput;
