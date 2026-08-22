import express from "express";

import {
    getAllCity,
    addNewCity,
    editCity,
    deleteCity
} from "../Controller/Tripcontroller.js";

const router = express.Router();

router.get("/", getAllCity);
router.post("/", addNewCity);
router.put("/:id", editCity);
router.delete("/:id", deleteCity);

export default router;