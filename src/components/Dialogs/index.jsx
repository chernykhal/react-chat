import React from "react";
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import { SearchOutlined } from "@ant-design/icons";

import DialogItem from "./DialogItem";
import dialogHeaderSvg from "../../assets/icons/dialogs-header.svg";
import dialogHeaderButtonSvg from "../../assets/icons/dialogs-header-button.svg";

import "./Dialogs.scss";
import { Form, Input } from "antd";

const Dialogs = ({ dialogs, authUser }) => {
  return (
    <div className={"dialogs"}>
      <div className="dialogs__header">
        <div className="dialogs__header-img">
          <img src={dialogHeaderSvg} alt="Dialog Header svg" />
        </div>
        <h3>Список диалогов</h3>
        <button className={"dialogs__header-button"}>
          <img src={dialogHeaderButtonSvg} alt="Dialog Header button svg" />
        </button>
      </div>
      <div className="dialogs__search">
        <Input.Search
          size={"large"}
          placeholder="Поиск среди контактов"
          prefix={
            <SearchOutlined
              className="site-form-item-icon"
              style={{ fontSize: "14px", color: "#CBCBCB" }}
            />
          }
          allowClear
        />
      </div>
      {dialogs &&
        orderBy(
          dialogs,
          (dialog) => dialog.message.createdAt,
          "desc"
        ).map((dialogItem) => (
          <DialogItem
            key={dialogItem._id}
            user={dialogItem.message.user}
            message={dialogItem.message}
            unReaded={dialogItem.unReaded}
            isOutgoing={dialogItem.message.user._id === authUser._id}
          />
        ))}
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.array,
  authUser: PropTypes.object,
};

Dialogs.defaultProps = {
  dialogs: [],
};

export default Dialogs;
