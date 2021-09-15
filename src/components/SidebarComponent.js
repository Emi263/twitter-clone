import React from "react";

function SidebarComponent({ icon, text, active }) {
  const classN = `${active ? "option active" : "option"}`;

  return (
    <div className={classN}>
      {icon} {text}
    </div>
  );
}

export default SidebarComponent;
