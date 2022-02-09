import { InteriorFabric } from "./Interiors.js";
import { PaintColors } from "./PaintColors.js";
import { TechPackages } from "./Technologies.js";
import { WheelSizes } from "./Wheels.js";
import { Orders } from "./Orders.js";
import {addCustomOrder} from "./database"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const Cars = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `
}









