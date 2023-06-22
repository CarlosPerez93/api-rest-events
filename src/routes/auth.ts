import { Router } from "express";
import { loginCtrl, registerCtrl } from "../api/auth/controller/auth";

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
