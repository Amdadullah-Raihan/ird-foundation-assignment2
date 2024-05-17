// RangeSlider component for selecting a value within a range.
// @component
// @param {number} min - The minimum value of the range.
// @param {number} max - The maximum value of the range.
// @param {number} value - The current value selected on the slider.
// @param {function} onChange - Function to handle value change on the slider.
// @returns {JSX.Element} - RangeSlider component.

import React, { useEffect, useState } from "react";

const RangeSlider = ({ min, max, value, onChange }) => {
  const [backgroundSize, setBackgroundSize] = useState(0);

  useEffect(() => {
    const calculateBackgroundSize = () => {
      setBackgroundSize(`${((value - min) * 100) / (max - min)}%`);
    };

    calculateBackgroundSize();

    // Clean up the effect
    return () => {
      setBackgroundSize(0);
    };
  }, [min, max, value]);

  return (
    <div className="z-0 flex items-center h-1 rounded-full">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="w-full range-slider"
        onChange={(e) => onChange(e.target.value)}
        style={{ backgroundSize }}
      />
      <span className="ml-2 text-sm">{value}</span>
    </div>
  );
};

export default RangeSlider;
