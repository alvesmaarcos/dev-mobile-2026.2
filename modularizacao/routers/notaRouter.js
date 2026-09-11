import { Router } from "express";
import { criar, listar } from "../controllers/notaController.js";

const router = Router();

router.get("/", listar);
router.post("/", criar);

export { router };
