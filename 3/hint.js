const button1 = document.getElementById("btn"); // Gets the id into const 
const links = document.getElementById("links"); // Gets the id into const 

links.style.display = "none"; // makes the hint to not be displayed

function handleClick() { // Javascript function for handling the click
    if (links.style.display !== "none") { // checks if the display is not none
        links.style.display = "none"; // makes the hint to not be displayed
        button1.innerHTML = "Click here to find out"; // changes html button back to default
    } else {
        links.style.display = "block"; // makes hint to be visible
        button1.innerHTML = "Click here to hide"; // changes button 
    }
}