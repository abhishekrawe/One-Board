let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector("Option-cont");
let optionsFlag = true;

//true -> tools show , fasle -> hide tools
optionsCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;

    if(optionsFlag) {

    }
    else {



    }
    

})

function opentTools() {
       let iconElem  = optionsCont.children[0];
       iconElem.classList.remove("fa-times");
       iconElem.classList.add("fa-bars");
       toolsCont.style.display = "flex";

}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "none";
}