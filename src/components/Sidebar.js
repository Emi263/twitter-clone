import React from "react";
import SidebarComponent from "./SidebarComponent";
import UserImg from "../images/user.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { auth } from "../firebase/firebaseconfig";
import { GlobalContext } from "../store/GlobalProvider";
import { useContext } from "react";

function Sidebar() {
  const { user, signOut } = useContext(GlobalContext);
  const sideOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      active: true,
    },
    {
      text: "Explore",
      icon: <ExploreIcon />,
      active: false,
    },

    {
      text: "Notifications",
      icon: <NotificationsNoneIcon />,
      active: false,
    },
    {
      text: "Messages",
      icon: <MailOutlineIcon />,
      active: false,
    },
    {
      text: "Bookmarks",
      icon: <BookmarkBorderIcon />,
      active: false,
    },
    {
      text: "Lists",
      icon: <ListAltIcon />,
      active: false,
    },
    {
      text: "Profile",
      icon: <PersonOutlineIcon />,
      active: false,
    },
    {
      text: "More",
      icon: <MoreHorizIcon />,
      active: false,
    },
  ];

  return (
    <div className="Sidebar">
      <div className="Sidebar_Components">
        <div className="twitter-icon">
          <TwitterIcon className="blue" />
        </div>
        {sideOptions.map((sideopt) => (
          <SidebarComponent
            text={sideopt.text}
            icon={sideopt.icon}
            key={sideopt.text}
            active={sideopt.active}
          />
        ))}
      </div>

      <div className="tweet-button">
        <a href="#">Tweet</a>
      </div>

      <div className="profile-section">
        <img src={user.photoURL || UserImg} alt="" />
        <div className="users">
          <span className="bold">{user.displayName}</span>
          <span className="light">{user.email}</span>
        </div>
        <div className="dots">...</div>
      </div>
    </div>
  );
}

export default Sidebar;
