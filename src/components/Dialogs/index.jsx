import React from "react";
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import DialogItem from "./DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ dialogs, authUser }) => {
  return (
    <div className={"dialogs"}>
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
