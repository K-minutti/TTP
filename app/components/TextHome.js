import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import TextStats from "./TextStats";
import getBackgroundColor from "./utils/getBackgroundColor";

const TextHome = () => {
  const [stats, setStats] = useState({});

  const getStatsObj = () => {
    let statsObj = {};
    for (let i = 0; i < localStorage.length; ++i) {
      statsObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    }
    setStats(statsObj);
  };

  useEffect(() => {
    getBackgroundColor();
    getStatsObj();
  }, []);

  return (
    <div className="text-home">
      <div className="text-home-header">
        Type or paste text below to see some statistics.
      </div>
      <section className="main-section row">
        <div className="text-section-1">
          <TextField updateStats={getStatsObj} textAreaStyle={false} />
        </div>
        <div className="text-section-2">
          <TextStats stats={stats} />
        </div>
      </section>
    </div>
  );
};

export default TextHome;
