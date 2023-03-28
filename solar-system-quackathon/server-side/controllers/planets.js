const Planets = require("../models/Planet");
const Moons = require("../models/Moon");

module.exports = {
    // getting the planet info
    getPlanets: async (req, res) => {
        try {
            const planets = await Planets.find()
            res.status(200).json(planets)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    },
    // getting the moon info
    getMoons: async (req, res) => {
        try {
            const moons = await Moons.find()
            res.status(200).json(moons)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
}

// inserts the data for to be displayed on the pages
const insertPlanets = async () => {
    try {
        await Planets.insertMany([{}])
    } catch (error) {
        
    }
}