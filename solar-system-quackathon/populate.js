import dotenv from "dotenv";

// const connectDB = require('./server-side/config/database');
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
        
        // populate the db with the planets json file 
        await Planets.create(jsonPlanets);
        console.log('Planets are in!!!!');

         // populate the db with the planets json file 
        await Moons.create(jsonMoons);
        console.log('Moons are in!!!!');

        // to prevent this file from running continously. It stops running after populating.
        process.exit(0) // exit with everything being ok
    } catch (error) {
        console.log(error);
        process.exit(1) // exit because of error
    }
}


start()

// node populate - to run this file and populate the database