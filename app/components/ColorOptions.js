import React from "react";

const ColorOptions = () => {
  let backgroundColorOptions = [
    "#fff",
    "#effaf6",
    "#fbfbfb",
    "#fed361",
    "#94b1e6",
    "#e5c99f",
    "#c88691",
    "#99b898",
    "#BABABA",
    "#95a1c3",
  ];

  function handleColorChange(event) {
    let chosenColor = event.target.style.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor =
      chosenColor;
    localStorage.setItem("backgroundColor", chosenColor);
  }

  return (
    <div className="backgroundMenu row">
      {backgroundColorOptions.map((color, idx) => {
        return (
          <div
            key={idx}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={handleColorChange}
          ></div>
        );
      })}
    </div>
  );
};
export default ColorOptions;
