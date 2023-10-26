import { Router } from "express";
import { createItem, deleteItem, getItems, getItemsByEmail, sendMail, updateItem } from "../controllers/index.controllers.js";


const router = Router();

router.get("/", (req, res) => {
    res.send("Bievenido al backend para studyproyect")
})
router.get("/getitems", getItems);
router.post("/getitemsbyemail", getItemsByEmail);
router.post("/createitem", createItem);
router.put("/edititem/:id", updateItem);
router.delete("/deleteitem/:id", deleteItem);
router.post("/nodemailer", sendMail);

export default router;