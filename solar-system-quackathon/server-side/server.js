const express = require("express");
const app = express();
const mongoose = require("mongoose");
const homeRoute = require("./routes/home")
const PORT = process.env.PORT || 3000;

    //*Import functions/routes
    const connectDB = require("./config/database")

    // Database function call
connectDB()


app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

//* ROUTES
app.use("/", homeRoute);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
