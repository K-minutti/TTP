function insertTab(target) {
  if (document.selection) {
    target.focus();
    let sel = document.selection.createRange();
    sel.text = "\t";
  } else if (target.selectionStart || target.selectionStart == "0") {
    let startPosition = target.selectionStart;
    let endPosition = target.selectionEnd;
    target.value =
      target.value.substring(0, startPosition) +
      "\t" +
      target.value.substring(endPosition, target.value.length);
    target.selectionStart = startPosition + "\t".length;
    target.selectionEnd = startPosition + "\t".length;
  } else {
    target.value += "\t";
  }
}

export default insertTab;
