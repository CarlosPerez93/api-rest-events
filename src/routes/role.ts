import { Router } from "express";
import {
  getRolesCtrl,
  getRoleCtrl,
  putRoleCtrl,
  deletedRoleCtrl,
  postRoleCtrl,
} from "../api/role/controller/roles.controller";

const router = Router();

router.get("/", getRolesCtrl);
router.get("/:id", getRoleCtrl);
router.put("/:id", putRoleCtrl);
router.delete("/:id", deletedRoleCtrl);
router.post("/", postRoleCtrl);

export { router };
