import React from "react";
import UserImg from "../images/user.png";
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from "@material-ui/icons/Email";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
function Trends() {
  return (
    <div className="Trends">
      <div className="search">
        <SearchIcon className="search-icon" />
        <input type="search" placeholder="Search Twitter" />
      </div>
      <div className="trends-for-you">Trends for you</div>
      <div className="who-to-follow">Who to follow</div>
      <div className="who-follow">
        <div className="profile-section">
          <img src={UserImg} alt="" />
          <div className="users">
            <span className="bold">randomuser</span>
            <span className="light">@randomuser</span>
          </div>
          <div className="follow-btn">Follow</div>
        </div>
        <div className="profile-section">
          <img src={UserImg} alt="" />
          <div className="users">
            <span className="bold">randomuser</span>
            <span className="light">@randomuser</span>
          </div>
          <div className="follow-btn">Follow</div>
        </div>
        <div className="profile-section">
          <img src={UserImg} alt="" />
          <div className="users">
            <span className="bold">randomuser</span>
            <span className="light">@randomuser</span>
          </div>
          <div className="follow-btn">Follow</div>
        </div>
      </div>

      <div className="messages">
        Messages
        <div className="icons">
          <EmailIcon /> <ExpandLessIcon />
        </div>
      </div>
    </div>
  );
}

export default Trends;
