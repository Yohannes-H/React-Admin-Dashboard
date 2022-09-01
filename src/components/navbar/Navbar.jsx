import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <ModeNightOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsRoundedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatRoundedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListRoundedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://st2.depositphotos.com/1006318/10457/v/380/depositphotos_104579964-stock-illustration-business-man-profile-icon-african.jpg?forcejpeg=true"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
