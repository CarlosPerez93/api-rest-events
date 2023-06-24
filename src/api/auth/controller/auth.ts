import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handleHttp } from "../../../utils/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const rows = await registerNewUser(body);
    if (rows) res.status(200).send({ message: "SUCCESSFUL_TRANSACTION" });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_POST_USER", error));
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const response = await loginUser(body);

  if (response === "PASSWORD_INCORRECT") {
    res.status(403).send(response);
  } else {
    res.send(response);
  }
};

export { loginCtrl, registerCtrl };
