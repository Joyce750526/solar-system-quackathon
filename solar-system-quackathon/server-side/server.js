import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import homeRoute from "./routes/home.js";
import reactRouter from "./routes/reactRouter.js"
const PORT = process.env.PORT || 3000;

//*Import functions/routes
import connectDB from "./config/database.js";

app.use(cors());

dotenv.config();

// Database function call
connectDB();

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./routes/htmlRoutes')(app);

//* ROUTES
app.use("/", homeRoute);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use('/getServer', reactRouter)
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
