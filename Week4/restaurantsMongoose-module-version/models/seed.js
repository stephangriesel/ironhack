const Restaurant = require("./restaurant")

let restaurantSeed = [
    {
        name: "Hells Kitchen",
        cuisine: "Spicy",
        borough: "Zuid-As"
    },
    {
        name: "Pimp Shrimp Delights",
        cuisine: "Fishy",
        borough: "Shady Alley Area"
    },
    {
        name: "Okido",
        cuisine: "Indian",
        borough: "East"
    }
]
Restaurant.remove({}, ()=> {
    for(let i = 0; i < restaurantSeed.length; i++) {
        Restaurant.create(restaurantSeed[i])
    }
})
