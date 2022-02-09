import { getOrders, getPaints } from "./database.js";

const buildOrderListItem = (order) => {
    const paints = getPaints()

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    
    const totalCost = foundPaint.price
    
    const costString = totalCost.toLocalString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`

}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

