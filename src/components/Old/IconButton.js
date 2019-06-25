import React from "react";

const IconButton = ({ url, color, icon, label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className={"ui icon basic vertical animated button " + color}
        style={{ margin: "0px" }}
      >
        <div
          class="visible content"
          style={{ margin: "0px", paddingRight: "10px" }}
        >
          <i className={"icon big " + icon} />
        </div>
        <div class="hidden content">{label}</div>
      </button>
    </a>
  );
};

export default IconButton;
