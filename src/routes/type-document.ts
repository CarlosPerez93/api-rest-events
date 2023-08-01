import { Router } from "express";
import {
  deleteTypeDocumentCTRL,
  getTypeDocumentCtrl,
  getTypeDocumentsCTRL,
  postTypeDocumentCtrl,
  updateTypeDocumentCtrl,
} from "../api/type-document/controller/type-document.controller";

const router = Router();

router.get("/", getTypeDocumentsCTRL);
router.post("/", postTypeDocumentCtrl);
router.get("/:id", getTypeDocumentCtrl);
router.put("/:id", updateTypeDocumentCtrl);
router.delete("/:id", deleteTypeDocumentCTRL);

export { router };
