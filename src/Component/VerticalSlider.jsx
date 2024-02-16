import React, { useState } from "react";
import "../Styles/VerticalSlider.css"; // Import CSS for styling

const VerticalSlider = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="vertical-slider">
      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
