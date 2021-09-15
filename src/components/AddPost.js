import React, { useEffect, useRef, useContext } from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import PublicIcon from "@material-ui/icons/Public";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import { useState } from "react";
import userImg from "../images/user.png";
import useStorage from "../hooks/useStorage";
import { GlobalContext } from "../store/GlobalProvider";
import { url } from "../hooks/useStorage";

function AddPost() {
  const { user } = useContext(GlobalContext);
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => {
    setSelected(e.target.files[0]);
  };

  const txtAreaRef = useRef();
  const [hasFocus, setHasFocus] = useState(false);
  const [txtAreaVal, setTxtAreaVal] = useState("");

  return (
    <div className="ADDPOST">
      <div className="addpost-header">
        <img src={user.photoURL != null ? user.photoURL : userImg} alt="" />
        <textarea
          style={{ fontSize: `18px` }}
          value={txtAreaVal}
          onChange={(e) => setTxtAreaVal(e.target.value)}
          onFocus={() => setHasFocus(true)}
          ref={txtAreaRef}
          className="txt-area"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="What's happening? (select one photo)"
        ></textarea>
      </div>
      {hasFocus && (
        <div className="focused">
          <PublicIcon className="icon" />{" "}
          <div className="reply"> Everyone can reply </div>
        </div>
      )}
      {selected && (
        <h4
          style={{ marginTop: `10px`, margin: "0 auto", textAlign: "center" }}
        >
          You selected image {selected.name}{" "}
        </h4>
      )}

      <div className="addpost-footer">
        <div className="icons">
          <label htmlFor="input">
            <InsertPhotoIcon
              style={{ cursor: "pointer" }}
              className="icons-green"
            />
          </label>
          <GifOutlinedIcon className="icons-green" />
          <BarChartOutlinedIcon className="icons-green" />
          <SentimentSatisfiedOutlinedIcon className="icons-green" />
          <ScheduleOutlinedIcon className="icons-green" />
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          name="input"
          id="input"
          onChange={handleChange}
        />
        <div
          className={`${
            txtAreaVal.length > 0 ? "addpost-button border" : "addpost-button"
          }`}
        >
          {txtAreaVal.length > 0 && (
            <AddCircleOutlineOutlinedIcon
              style={{ color: `rgb(37, 191, 99)`, cursor: "pointer" }}
            />
          )}

          <button
            onClick={() => {
              setClicked(true);
              setTxtAreaVal("");
            }}
            className={txtAreaVal.length > 0 ? "" : "disable"}
            disabled={txtAreaVal.length > 0 ? false : true}
          >
            Tweet
          </button>
        </div>
      </div>

      {clicked && selected && (
        <Progress val={txtAreaVal} file={selected} setFile={setSelected} />
      )}
    </div>
  );
}

export default AddPost;

function Progress({ file, setFile, val }) {
  const { url, progress } = useStorage(file, val);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);
  return (
    <div
      style={{
        height: `5px`,
        position: "relative",
        width: `${progress}%`,
        background: "rgb(37, 191, 99)",
      }}
    ></div>
  );
}
