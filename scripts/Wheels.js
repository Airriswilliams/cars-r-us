import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            // invoking setSize function which puts a property onto the orderBuilder object
            setWheel(parseInt(event.target.value))
        }
    }
)

export const WheelSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.size} ${wheel.type} ${wheel.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}