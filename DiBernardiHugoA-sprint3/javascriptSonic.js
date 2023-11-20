const contenedorSonic = document.querySelector("#contenedorSonic");
const idImagenSonic = document.querySelector("#idImagenSonic");

const contenedorTails = document.querySelector("#contenedorTails");
const idImagenTails = document.querySelector("#idImagenTails");

const contenedorKnuckles = document.querySelector("#contenedorKnuckles");
const idImagenKnuckles = document.querySelector("#idImagenKnuckles");

const idImagenAmy = document.querySelector("#idImagenAmy");
const contenedorAmy = document.querySelector("#contenedorAmy");

const idImagenShadow = document.querySelector("#idImagenShadow");
const contenedorShadow = document.querySelector("#contenedorShadow");

let personajeSoltado = null; // Declarar la variable

let isEnteredSonic = false;
let isEnteredTails = false;
let isEnteredKnuckles = false;
let isEnteredAmy = false;
let isEnteredShadow = false;

/*Sonic*/
idImagenSonic.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", "Sonic");
});

contenedorSonic.addEventListener("dragenter", e => {
    console.log("drag enter");
});

contenedorSonic.addEventListener("dragleave", e => {
    console.log("drag leave");
});

contenedorSonic.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("drag over");
});

contenedorSonic.addEventListener("drop", e => {
    console.log("drop");
    if (!isEnteredSonic) {
        isEnteredSonic = true;
        idImagenSonic.style.left = "0";
        idImagenSonic.style.top = "0";
        idImagenSonic.style.width = "100%";
        idImagenSonic.style.height = "100%";
    }

    personajeSoltado = e.dataTransfer.getData("text/plain");

    if (personajeSoltado === "Sonic" && e.target.id === "contenedorSonic") {
        console.log("Soltaste a Sonic en el contenedor Sonic");
        contenedorSonic.appendChild(idImagenSonic);
    } else {
        alert("No se puede soltar aquí, este contenedor es solo para Sonic.");
        e.preventDefault();
    }

    // Restablece el estado de isEntered
    isEnteredSonic = false;
});

/*Tails*/
idImagenTails.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", "Tails");
});

contenedorTails.addEventListener("dragenter", e => {
    console.log("drag enter");
});

contenedorTails.addEventListener("dragleave", e => {
    console.log("drag leave");
});

contenedorTails.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("drag over");
});

contenedorTails.addEventListener("drop", e => {
    console.log("drop");
    if (!isEnteredTails) {
        isEnteredTails = true;
        idImagenTails.style.left = "0";
        idImagenTails.style.top = "0";
        idImagenTails.style.width = "100%";
        idImagenTails.style.height = "100%";
    }

    personajeSoltado = e.dataTransfer.getData("text/plain");

    if (personajeSoltado === "Tails" && e.target.id === "contenedorTails") {
        console.log("Soltaste a Tails en el contenedor Tails");
        contenedorTails.appendChild(idImagenTails);
    } else {
        alert("No se puede soltar aquí, este contenedor es solo para Tails.");
        e.preventDefault();
    }

    // Restablece el estado de isEntered
    isEnteredTails = false;
});

/*Knuckles*/
idImagenKnuckles.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", "Knuckles");
});

contenedorKnuckles.addEventListener("dragenter", e => {
    console.log("drag enter");
});

contenedorKnuckles.addEventListener("dragleave", e => {
    console.log("drag leave");
});

contenedorKnuckles.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("drag over");
});

contenedorKnuckles.addEventListener("drop", e => {
    console.log("drop");
    if (!isEnteredKnuckles) {
        isEnteredKnuckles = true;
        idImagenKnuckles.style.left = "0";
        idImagenKnuckles.style.top = "0";
        idImagenKnuckles.style.width = "100%";
        idImagenKnuckles.style.height = "100%";
    }

    personajeSoltado = e.dataTransfer.getData("text/plain");

    if (personajeSoltado === "Knuckles" && e.target.id === "contenedorKnuckles") {
        console.log("Soltaste a Knuckles en el contenedor Knuckles");
        contenedorKnuckles.appendChild(idImagenKnuckles);
    } else {
        alert("No se puede soltar aquí, este contenedor es solo para Knuckles.");
        e.preventDefault();
    }

    // Restablece el estado de isEntered
    isEnteredKnuckles = false;
});

/*Shadow*/
idImagenShadow.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", "Shadow");
});

contenedorShadow.addEventListener("dragenter", e => {
    console.log("drag enter");
});

contenedorShadow.addEventListener("dragleave", e => {
    console.log("drag leave");
});

contenedorShadow.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("drag over");
});

contenedorShadow.addEventListener("drop", e => {
    console.log("drop");
    if (!isEnteredShadow) {
        isEnteredShadow= true;
        idImagenShadow.style.left = "0";
        idImagenShadow.style.top = "0";
        idImagenShadow.style.width = "100%";
        idImagenShadow.style.height = "100%";
    }

    personajeSoltado = e.dataTransfer.getData("text/plain");

    if (personajeSoltado === "Shadow" && e.target.id === "contenedorShadow") {
        console.log("Soltaste a Shadow en el contenedor Shadow");
        contenedorShadow.appendChild(idImagenShadow);
    } else {
        alert("No se puede soltar aquí, este contenedor es solo para Shadow.");
        e.preventDefault();
    }

    // Restablece el estado de isEntered
    isEnteredShadow= false;
});

/*Amy*/
idImagenAmy.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", "Amy");
});

contenedorAmy.addEventListener("dragenter", e => {
    console.log("drag enter");
});

contenedorAmy.addEventListener("dragleave", e => {
    console.log("drag leave");
});

contenedorAmy.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("drag over");
});

contenedorAmy.addEventListener("drop", e => {
    console.log("drop");
    if (!isEnteredAmy) {
        isEnteredAmy= true;
        idImagenAmy.style.left = "0";
        idImagenAmy.style.top = "0";
        idImagenAmy.style.width = "100%";
        idImagenAmy.style.height = "100%";
    }

    personajeSoltado = e.dataTransfer.getData("text/plain");

    if (personajeSoltado === "Amy" && e.target.id === "contenedorAmy") {
        console.log("Soltaste a Amy en el contenedor Amy");
        contenedorAmy.appendChild(idImagenAmy);
    } else {
        alert("No se puede soltar aquí, este contenedor es solo para Amy.");
        e.preventDefault();
    }

    // Restablece el estado de isEntered
    isEnteredAmy= false;
});

if (contenedorAmy.contains(idImagenAmy) &&
    contenedorShadow.contains(idImagenShadow) &&
    contenedorSonic.contains(idImagenSonic) &&
    contenedorTails.contains(idImagenTails) &&
    contenedorKnuckles.contains(idImagenKnuckles)) {
    alert("Has soltado a todos los personajes con éxito.");
}