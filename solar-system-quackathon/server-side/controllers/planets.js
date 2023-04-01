import Planets from "../models/Planet.js";
import Moons from "../models/Moon.js";

//* GET: getting the planet info
export const getPlanets = async (req, res) => {
  try {
    const planets = await Planets.find();
    res.status(200).json(planets);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//* GET: getting the moon info
export const getMoons = async (req, res) => {
  try {
    const moons = await Moons.find();
    res.status(200).json(moons);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
