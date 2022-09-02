import React from "react";
import "./widget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function Widget({ type }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        Icon: <PersonOutlineIcon className="icon" />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">213112</span>
        <span className="link">See All Users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowUpwardIcon />
          20%
        </div>
        <PersonOutlineIcon className="icon" />
      </div>
    </div>
  );
}

export default Widget;
