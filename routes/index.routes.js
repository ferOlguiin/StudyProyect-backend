import { Router } from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/index.controllers.js";


const router = Router();

router.get("/", (req, res) => {
    res.send("Bievenido al backend para studyproyect")
})
router.get("/getitems", getItems);
router.post("/createitem", createItem);
router.put("/edititem/:id", updateItem);
router.delete("/deleteitem/:id", deleteItem);

export default router;