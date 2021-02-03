import React from "react";
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import { FormOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip, Empty } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";

import {
  fetchDialogs,
  setDialogs,
  setActiveDialog,
} from "../../redux/actions/dialogs";
import {
  fetchMessagesFromDialog,
  setMessages,
} from "../../redux/actions/messages";

import DialogItem from "./DialogItem";
import dialogHeaderSvg from "../../assets/icons/dialogs-header.svg";
import Loader from "./Loader/Loader";

import "./Dialogs.scss";

const Dialogs = ({ authUser, items, fetchDialogs }) => {
  const [inputValue, setValue] = React.useState("");
  const [filtered, setFilteredItems] = React.useState(Array.from(items));
  const isLoading = useSelector(({ dialogs }) => dialogs.isLoading);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    const value = e.target.value;
    setValue(value);
    setFilteredItems(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
  };

  const handleSetActiveDialog = (dialog) => {
    dispatch(setActiveDialog(dialog));
    setValue(null);
    setFilteredItems(items);
  };

  const handleEscPressing = (event) => {
    if (event.keyCode === 27) {
      dispatch(setActiveDialog(null));
    }
  };

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchDialogs());
    } else {
      setFilteredItems(items);
    }
    document.addEventListener("keydown", handleEscPressing, false);
  }, [items]);

  return (
    <div className={"dialogs"}>
      <div className="dialogs__header">
        <div className="dialogs__header-img">
          <img src={dialogHeaderSvg} alt="Dialog Header svg" />
        </div>
        <h3>Список диалогов</h3>
        <button className={"dialogs__header-button"}>
          <Tooltip title="Редактировать">
            <FormOutlined style={{ fontSize: "18px", color: "#5e5e5e" }} />
          </Tooltip>
        </button>
      </div>
      <div className="dialogs__search">
        <Input.Search
          onChange={onChangeInput}
          size={"large"}
          value={inputValue}
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
      <div className={"dialogs__items"}>
        {!isLoading && filtered.length ? (
          orderBy(
            filtered,
            (dialog) => dialog.created_at,
            "desc"
          ).map((dialogItem) => (
            <DialogItem
              key={dialogItem._id}
              user={dialogItem.user}
              message={dialogItem.text}
              unReaded={dialogItem.unReaded}
              created_at={dialogItem.created_at}
              isOutgoing={dialogItem.user._id === authUser._id}
              onSelectDialog={handleSetActiveDialog}
            />
          ))
        ) : !isLoading ? (
          <Empty
            description={"Ничего не найдено"}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : (
          Array(10)
            .fill(0)
            .map((_, index) => (
              <div className={"loader"}>
                <Loader key={index} />
              </div>
            ))
        )}
      </div>
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

export default connect(
  ({ dialogs }) => dialogs,
  () => ({
    fetchDialogs,
    setDialogs,
  })
)(Dialogs);
