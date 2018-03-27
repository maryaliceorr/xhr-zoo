

const printToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
};



const buildDomString = (animalArray) => {
    let domString = "";
    for (let i=0; i<animalArray.length; i++) {
        domString += `<h2>${animalArray[i].names}</h2>`
    }
    printToDom(domString, "animal-holder");
};

function executeThisCodeifXHRFails() {
    console.log("this failed - try again");
};

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
};




const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeifXHRFails);
    myRequest.open("GET", "animals.json");
    myRequest.send();
};

startApplication ();
