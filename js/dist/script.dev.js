"use strict";

var textarea = document.querySelector("textarea"),
    fileName = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".select-menu select"),
    saveBtn = document.querySelector(".save-btn");
selectMenu.addEventListener("change", function () {
  var selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = "Save As ".concat(selectedOption.split(" ")[0], " File ");
});
saveBtn.addEventListener("click", function () {
  var blob = new Blob([textarea.value], {
    type: selectMenu.value
  });
  var filleUrl = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.download = fileName.value;
  link.href = filleUrl;
  link.click(); //console.log(selectMenu.value)
});
//# sourceMappingURL=script.dev.js.map
