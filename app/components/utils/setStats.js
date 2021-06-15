function setStatsOnLocalStorage(stats) {
  for (const key in stats) {
    localStorage.setItem(key, stats[key]);
  }
}

export default setStatsOnLocalStorage;
