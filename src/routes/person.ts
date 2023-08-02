import { Router } from "express";
import {
  deletePersonCtrl,
  getPersonCtrl,
  getPersonsCtrl,
  postPersonCtrl,
  updatePersonCtrl,
} from "../api/person/controller/person";
import { checkJWT } from "../middleware/session";

const router = Router();

router.post("/", checkJWT, postPersonCtrl);
router.get("/", checkJWT, getPersonsCtrl);
router.get("/:id", checkJWT, getPersonCtrl);
router.put("/:id", checkJWT, updatePersonCtrl);
router.delete("/:id", checkJWT, deletePersonCtrl);

export { router };
