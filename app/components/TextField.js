import React from "react";
import parseTextStats from "./utils/textParser";
import insertTab from "./utils/insertTabAtCursor";
import setStatsOnLocalStorage from "./utils/setStats";

const TextField = (props) => {
  const { textAreaStyle } = props;
  // handleKey
  // appends/inserts "\t" to text value when user hits tab instead of default behavior
  function handleKey(event) {
    let tabKey = 9;
    if (event.keyCode == tabKey) {
      insertTab(event.target);
      if (event.preventDefault) {
        event.preventDefault();
      }
      return false;
    }
  }
  // getStats
  // Calls parseTextStats() that will return the stats of the user input and clear localstorage is text is null
  function getStats(event) {
    let text = event.target.value;
    if (!text) {
      localStorage.clear();
      if (props.updateStats) props.updateStats();
    } else {
      localStorage.setItem("main-text", text);
      setTimeout(
        function () {
          if (/[A-Z|a-z|ü|é]/.test(text)) {
            let stats = parseTextStats(text);
            setStatsOnLocalStorage(stats);
            if (props.updateStats) props.updateStats();
          }
        },
        100,
        event
      );
    }
  }

  function handleScroll(event) {
    event.target.style.boxShadow =
      "inset 0 7px 9px -7px rgba(204,204,204,0.65)";
    setTimeout(() => {
      event.target.style.boxShadow = "none";
    }, 1500);
  }

  return (
    <div className="text-field-container">
      <textarea
        className={textAreaStyle ? textAreaStyle : "active"}
        placeholder="Hi! Type here please..."
        onKeyDown={handleKey}
        onChange={getStats}
        onScroll={handleScroll}
      >
        {localStorage.getItem("main-text")}
      </textarea>
    </div>
  );
};

export default TextField;
