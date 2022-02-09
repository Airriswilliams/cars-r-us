const database = {
    paints: [
        {id: 1, color: "Silver", price: 1250 },
        {id: 2, color: "Midnight Blue", price: 1350},
        {id: 3, color: "Firebrick Red", price: 1500},
        {id: 4, color: "Spring Green", price: 1400}

    ],
    interiors: [
        {id: 1, name: "Beige Fabric", price: 500},
        {id: 2, name: "Charcoal Fabric", price: 525},
        {id: 3, name: "White Leather", price: 850},
        {id: 4, name: "Black Leather", price: 800}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 1100},
        {id: 2, package: "Navigation Package", price: 1250},
        {id: 3, package: "Visibility Package", price: 1400},
        {id: 4, package: "Ultra Package", price: 1600}
    ],
    wheels: [
        {id: 1, size: "17-inch", color: "", type: "Pair Radial", price: 1500},
        {id: 2, size: "17-inch", color: "Black", type: "Pair Radial", price: 1700},
        {id: 3, size: "18-inch", color: "Silver", type: "Pair Spoke", price: 1850},
        {id: 4, size: "18-inch", color: "Black", type: "Pair Spoke", price: 1800}
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1
        }
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}