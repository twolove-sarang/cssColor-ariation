import React from "react";

export default function InputPreview({
  color: { colorChange, recommendedColor },
}) {
  return (
    <div>
      <div className="example_design">
        <input
          placeholder="type it!"
          style={{
            color: `#${colorChange}`,
            backgroundColor: `#${recommendedColor}`,
          }}
        />
        <input
          placeholder="type it!"
          style={{
            color: `#${recommendedColor}`,
            backgroundColor: `#${colorChange}`,
          }}
        />
        <input
          placeholder="type it!"
          style={{
            color: `#${recommendedColor}`,
            border: `1px solid #${colorChange}`,
            backgroundColor: `white 0.1`,
          }}
        />
        <input
          placeholder="type it!"
          style={{
            color: `#${colorChange}`,
            border: `1px solid #${recommendedColor}`,
            backgroundColor: `white 0.1`,
          }}
        />
      </div>
    </div>
  );
}
