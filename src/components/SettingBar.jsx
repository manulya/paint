import React from "react";
import "../styles/toolbar.scss";
import toolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Line width</label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
        style={{ margin: "0 10px" }}
      ></input>
      <label htmlFor="stroke-style">Stroke style</label>
      <input
        id="stroke-style"
        type="color"
        style={{ marginLeft: 10 }}
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;
