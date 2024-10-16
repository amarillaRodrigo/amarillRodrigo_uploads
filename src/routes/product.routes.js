import express from "express";
import { createProduct } from "../controllers/product.controllers.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", upload.single("productImage"), createProduct);

export default router;
