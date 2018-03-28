

const printToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
};



const buildDomString = (animalArray) => {
    let domString = "";
    for (let i=0; i<animalArray.length; i++) {
        if(animalArray[i].isCarnivore) {
            domString += `<div class="animal carnivore">`;
        } else {
            domString += `<div class="animal vegetable">`;
        }
            domString +=    `<h1>${animalArray[i].names}</h1>`;
            domString +=    `<h3>${animalArray[i].number}</h3>`;
            domString +=    `<img src="${animalArray[i].imageUrl}" alt="">`;
            domString +=    `<button class="escaped" type="button">${"Escaped"}</button>`;
            domString += `</div>`
    }
    printToDom(domString, "animal-holder");
};

const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName("escaped");

    console.log(escapedButtons);
    for(let i=0; i<escapedButtons.length; i++) {
        escapedButtons[i].addEventListener("click", animalEscaped)
    }
};
const animalEscaped = () => {
    console.log(animalEscaped);
    showCarnivores();
    showVegetables();
    
};

const showCarnivores = () => {

};

const showVegetables = () => {

};

function executeThisCodeifXHRFails() {
    console.log("this failed - try again");
};

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
    addEscapedEventListeners(animalEscaped);
};




const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeifXHRFails);
    myRequest.open("GET", "animals.json");
    myRequest.send();
};

startApplication ();
