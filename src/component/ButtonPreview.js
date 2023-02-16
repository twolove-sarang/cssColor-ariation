import React from "react";

export default function ({ color: { colorChange, recommendedColor } }) {
  return (
    <div>
      <div className="example_design">
        <button
          style={{
            color: `#${colorChange}`,
            backgroundColor: `#${recommendedColor}`,
          }}
        >
          Button
        </button>
        <button
          style={{
            color: `#${recommendedColor}`,
            backgroundColor: `#${colorChange}`,
          }}
        >
          Button
        </button>
        <button
          style={{
            color: `#${recommendedColor}`,
            border: `1px solid #${colorChange}`,
            backgroundColor: `white 0.1`,
          }}
        >
          Button
        </button>
        <button
          style={{
            color: `#${colorChange}`,
            border: `1px solid #${recommendedColor}`,
            backgroundColor: `white 0.1`,
          }}
        >
          Button
        </button>
      </div>
    </div>
  );
}
