import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import getBackgroundColor from "./utils/getBackgroundColor";

const FocusMode = () => {
  const [displayNav, setNavDisplay] = useState(false);

  const handleFocusToggle = () => {
    if (displayNav) {
      document.getElementById("navbar").style.display = "none";
      setNavDisplay(false);
    } else {
      document.getElementById("navbar").style.display = "flex";
      setNavDisplay(true);
    }
  };

  useEffect(() => {
    getBackgroundColor();
    document.getElementById("navbar").style.display = "none";
  }, []);

  return (
    <div className="focusMode">
      {displayNav ? (
        <p onClick={handleFocusToggle} id="exitFocusMode">
          &#9650;
        </p>
      ) : (
        <p onClick={handleFocusToggle} id="exitFocusMode">
          &#9660;
        </p>
      )}
      <TextField updateStats={false} textAreaStyle="focusModeTextArea" />
    </div>
  );
};

export default FocusMode;
