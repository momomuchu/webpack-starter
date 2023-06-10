// DEMO JOKE APP
import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
// Create a new button element
var newButton = document.createElement("button");
newButton.innerHTML = "Newf Button";

// Add an event listener to the new button
newButton.addEventListener("click", function() {
  // Perform some action when the new button is clicked
  console.log("New button clicked!");
});

// Find the container element where you want to add the new button
var container = document.querySelector(".container");

// Append the new button to the container
container.appendChild(newButton);
