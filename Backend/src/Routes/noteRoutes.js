import express from "express";

import {
    getAllCity,
    addNewCity,
    editCity,
    deleteCity,
    getCityById
} from "../Controller/Tripcontroller.js";

const router = express.Router();

router.get("/", getAllCity);
router.get("/:id", getCityById);
router.post("/", addNewCity);
router.put("/:id", editCity);
router.delete("/:id", deleteCity);

export default router;