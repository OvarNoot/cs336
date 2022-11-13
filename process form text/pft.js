const textarea0 = document.getElementById('changetext'); //gets textarea element

const counterUpdate = document.getElementById("word-counter"); // will get the pragraph element
const counterUpdate1 = document.getElementById("char-counter"); // will get the pragraph element

textarea0.addEventListener("input", toUpper1); //event listenr when user inputs something
textarea0.addEventListener("input", wordCounter); //event listenr when user inputs something
textarea0.addEventListener("input", charCounter); //event listenr when user inputs something

function toUpper1() {
    textarea0.value = textarea0.value.toUpperCase(); // this will gets whatever that's typed to textarea and convert to uppercase
}

function wordCounter() {
    let numwords = 0; // default word counter
    let splitter = textarea0.value.split(" "); // splits up the words into with the spaces array

    for (let i = 0; i < splitter.length; i++) {
        (splitter[i] !== "") ? numwords++ : numwords += 0; // if another space ignore else adds 1 to the counter
    }
    // update the paragraph word counter for 1 and words for 0 and 2 or more
    counterUpdate.innerHTML = (numwords === 1) ? numwords + " word" : numwords + " words";
}



function charCounter() {
    const textarea1 = textarea0.value.split(""); // this will gets whatever that's typed to textarea and splits up the words into array letter by letter
    let numchars = 0; // default character counter

    for (let i = 0; i < textarea1.length; i++) {
        numchars++; //adds 1 to the counter
    }
    // update the paragraph character counter for 1 is character and for 0 and 2 or more is characters
    counterUpdate1.innerHTML = (numchars === 1) ? numchars + " character" : numchars + " characters";
}