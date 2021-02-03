import React from "react";
import { Input, Tooltip } from "antd";
import {
  AudioOutlined,
  CameraOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

const DialogWindowInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const toggleEmojiPickerVisible = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };
  return (
    <div className="dialog-window__input">
      <Input
        size={"large"}
        placeholder="Введите текст сообщения..."
        onChange={onChangeInput}
        value={inputValue}
        prefix={
          <div className={"dialog-window__input-prefix"}>
            {emojiPickerVisible && (
              <Picker
                set="apple"
                style={{ position: "absolute", bottom: "50px", zIndex: "100" }}
              />
            )}
            <SmileOutlined
              className="site-form-item-icon"
              style={{ fontSize: "18px", color: "#CBCBCB" }}
              onClick={toggleEmojiPickerVisible}
            />
          </div>
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
