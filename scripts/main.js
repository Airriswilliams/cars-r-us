import { Cars } from "./Cars.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Cars()
}

renderAllHTML()

// implement a new event listener in the main module for the custom
// stateChanged event
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    // invoke the renderAllHTML function to generate the HTML so that new
    // state is displayed to the user.
    renderAllHTML()
})