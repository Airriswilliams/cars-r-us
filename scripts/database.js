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
        {id: 1, package: "Basic", price: 1100},
        {id: 2, package: "Navigation", price: 1250},
        {id: 3, package: "Visibility", price: 1400},
        {id: 4, package: "Ultra", price: 1600}
    ],
    wheels: [
        {id: 1, size: 17, color: "None", type: "Radial", price: 1500},
        {id: 2, size: 17, color: "Black", type: "Radial", price: 1700},
        {id: 3, size: 18, color: "Silver", type: "Spoke", price: 1850},
        {id: 4, size: 18, color: "Black", type: "Spoke", price: 1800}
    ],
    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1
        }
    ]
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