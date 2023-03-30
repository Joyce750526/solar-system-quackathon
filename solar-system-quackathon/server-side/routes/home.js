import { Router } from "express";
const router = Router();
import { getPlanets } from "../controllers/planets.js";

// * Handles initial GET request from the homepage

router.get("/", getPlanets); // read
router.get("/moons", getMoons); // read

export default router;
