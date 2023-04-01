import { Router } from "express";
const router = Router();
import { getPlanets, getMoons } from "../controllers/planets.js";

// * Handles initial GET request from the homepage

router.get("/", getPlanets); // read
router.get("/moon", getMoons); // read

export default router;
