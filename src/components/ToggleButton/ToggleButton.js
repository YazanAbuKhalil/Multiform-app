import { useState } from "react";
import "./ToggleButton.css";

export default function ToggleButton({ toggleValue, handleToggle }) {
  return (
    <div className="toggle-container">
      <span className={`period ${!toggleValue && "active-toggle"}`}>
        Monthly
      </span>

      <label className="switch">
        <input type="checkbox" value={toggleValue} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <span className={`period ${toggleValue && "active-toggle"}`}>Yearly</span>
    </div>
  );
}

