function getBackgroundColor() {
  if (localStorage.getItem("backgroundColor") == null) {
    localStorage.setItem("backgroundColor", "#fbfbfb");
  } else {
    let color = localStorage.getItem("backgroundColor");
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
  }
}

export default getBackgroundColor;
