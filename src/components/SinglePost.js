import React from "react";
import userImg from "../images/user.png";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Img from "../images/img.jpg";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
function SinglePost({ postedImg, caption, userImg, username, userAddress }) {
  return (
    <div className="SinglePost">
      <div className="single-post-header">
        <img src={userImg} alt="" />
        <div className="credentials">
          <span style={{ fontWeight: "bold", fontSize: `15px` }}>
            {username.split(" ")[0]}
          </span>
          <span style={{ color: `rgb(124, 115, 115)`, fontSize: `15px` }}>
            @{userAddress}
          </span>
          <span style={{ color: `rgb(124, 115, 115)`, fontSize: `15px` }}>
            · 2m
          </span>
        </div>
      </div>
      <div className="caption">{caption}</div>
      <div className="img-post">
        <img className="single-post-image" src={postedImg} alt="" />
      </div>
      <div className="post-footer">
        <div>
          {" "}
          <span>0</span> <ChatBubbleOutlineIcon className="footer-icons" />
        </div>
        <div>
          <span>0</span> <RepeatIcon className="footer-icons" />
        </div>
        <div>
          {" "}
          <span>0</span> <FavoriteBorderIcon className="footer-icons" />
        </div>
        <div>
          {" "}
          <span>0</span> <PublishOutlinedIcon className="footer-icons" />
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
