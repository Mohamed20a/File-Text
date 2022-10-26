const textarea =document.querySelector("textarea"),
fileName =document.querySelector(".file-name input"),
selectMenu =document.querySelector(".select-menu select"),
saveBtn =document.querySelector(".save-btn");


selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File `;
});


saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    const filleUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName.value;
    link.href = filleUrl;
    link.click();
    //console.log(selectMenu.value)
});