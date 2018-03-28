

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
            domString += `<div class="button-container">`
            domString +=    `<button class="escaped" type="button">${"Escaped"}</button>`;
            domString += `</div>`;
            domString += `</div>`;
    }
    printToDom(domString, "animal-holder");
};

const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName("escaped");

    for(let i=0; i<escapedButtons.length; i++) {
        escapedButtons[i].addEventListener("click", animalEscaped)
    }
};
const animalEscaped = () => {

    showCarnivores();
    showVegetables();
    
};

const showCarnivores = () => {
    const carnivores = document.getElementsByClassName("carnivore")
    for (let j=0; j<carnivores.length; j++) {
        carnivores[j].children[3].innerHTML = "";
        carnivores[j].classList.add("red");
    }
};

const showVegetables = () => {
    const vegetables =  document.getElementsByClassName("vegetable")
    for (let k=0; k<vegetables.length; k++) {
        vegetables[k].children[3].innerHTML = `<button>EAT ME!!</button>`;
        vegetables[k].classList.add("green");

    }
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
