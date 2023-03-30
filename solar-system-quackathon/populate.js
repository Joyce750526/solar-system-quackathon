import dotenv from "dotenv";

import connectDB from './server-side/config/database.js';
import Planets from './server-side/models/Planet.js';
import Moons from './server-side/models/Moon.js';

dotenv.config();

import jsonPlanets from './planets.json' assert {type: 'json'}
import jsonMoons from './moons.json' assert {type: 'json'}



const start = async () => {
    try {
    // connecting to the database
    await connectDB(process.env.DB_STRING)

    // delete anything previously in the db so you can start from scratch (also prevents this data from duplicating if you rerun more than once)
    await Planets.deleteMany();
    await Moons.deleteMany();
    
    // populate the db with the moons json file 
    await Moons.create(jsonMoons);
    console.log('Moons are in!!!!');

    // populate the db with the planets json file 
    for (const planet of jsonPlanets) {
      // find the Moons associated with this Planet
      const planetMoons = await Moons.find({ planetName: planet.name });
      
      // create the Planet document with the Moons' ObjectIds
      const newPlanet = new Planets({
        name: planet.name,
        size: planet.size,
        distanceFromSun: planet.distanceFromSun,
        facts: planet.facts,
        state: planet.State,
        moons: planetMoons.map(moon => moon._id)
      });

      // save the new Planet document to the database
      await newPlanet.save();
    }

    console.log('Planets are in!!!!');

    // to prevent this file from running continously. It stops running after populating.
    process.exit(0) // exit with everything being ok
  } catch (error) {
    console.log(error);
    process.exit(1) // exit because of error
  }
}


start()

// node populate - to run this file and populate the database