import React from "react";
import { Input, Tooltip } from "antd";
import {
  AudioOutlined,
  CameraOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { UploadField } from "@navjobs/upload";

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
              <UploadField
                onFiles={(files) => console.log(files)}
                containerProps={{
                  className: "file_uploader",
                }}
                uploadProps={{
                  accept: ".pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.gif,.png",
                  multiple: "multiple",
                }}
              >
                <CameraOutlined
                  style={{ fontSize: "18px", color: "#CBCBCB" }}
                />
              </UploadField>
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
