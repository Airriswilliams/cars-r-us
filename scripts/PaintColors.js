import { getPaints, setPaint } from "./database.js";

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            // invoking setSize function which puts a property onto the orderBuilder object
            setPaint(parseInt(event.target.value))
        }
    }
)

export const PaintColors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = paints.map(paint =>{
        return `<li>
        <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
