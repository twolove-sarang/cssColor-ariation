import React from "react";

export default function ({ color }) {
  const { colorChange, recommendedColor } = color;
  return (
    <div>
      <div className="example_design">
        <button
          style={{
            color: `#${colorChange.color}`,
            backgroundColor: `#${recommendedColor}`,
          }}
        >
          Button
        </button>
        <button
          style={{
            color: `#${recommendedColor}`,
            backgroundColor: `#${colorChange.color}`,
          }}
        >
          Button
        </button>
        <button
          style={{
            color: `#${recommendedColor}`,
            border: `1px solid #${colorChange.color}`,
            backgroundColor: `white 0.1`,
          }}
        >
          Button
        </button>
        <button
          style={{
            color: `#${colorChange.color}`,
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
