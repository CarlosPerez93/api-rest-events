import { Router } from "express";
import {
  deleteTypeServiceCTRL,
  getTypeServiceCTRL,
  getTypeServicesCTRL,
  postTypeServiceCTRL,
  updateTypeServiceCTRL,
} from "../api/type-service/controller/type-service.controller";

const router = Router();

router.post("/", postTypeServiceCTRL);
router.get("/", getTypeServicesCTRL);
router.get("/:id", getTypeServiceCTRL);
router.put("/:id", updateTypeServiceCTRL);
router.delete("/:id", deleteTypeServiceCTRL);

export { router };
