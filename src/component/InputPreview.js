import React from "react";

export default function InputPreview({ color }) {
  const { colorChange, recommendedColor } = color;
  return (
    <div>
      <div className="example_design">
        <input
          placeholder="type it!"
          style={{
            color: `#${colorChange.color}`,
            backgroundColor: `#${recommendedColor}`,
          }}
        />
        <input
          placeholder="type it!"
          style={{
            color: `#${recommendedColor}`,
            backgroundColor: `#${colorChange.color}`,
          }}
        />
        <input
          placeholder="type it!"
          style={{
            color: `#${recommendedColor}`,
            border: `1px solid #${colorChange.color}`,
            backgroundColor: `white 0.1`,
          }}
        />
        <input
          placeholder="type it!"
          style={{
            color: `#${colorChange.color}`,
            border: `1px solid #${recommendedColor}`,
            backgroundColor: `white 0.1`,
          }}
        />
      </div>
    </div>
  );
}
