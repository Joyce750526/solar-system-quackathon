import { Router } from "express";
const router = Router();
import home from "./home.js"

// * Handles initial GET request from the homepage

router.use("/", home); // read
router.use("/moon", home); // read

export default router;