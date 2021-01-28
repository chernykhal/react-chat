import React from "react";

import { generateAvatarFromHash } from "../../helpers";

import "./Avatar.scss";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <div
        className={"user-avatar"}
        style={{ backgroundImage: `url('${user.avatar}')` }}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    return (
      <div
        className={"user-avatar"}
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
      >
        <span>{user.fullname.charAt(0)}</span>
      </div>
    );
  }
};

export default Avatar;
