import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../../../utils/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const rows = await registerNewUser(body);

    if (rows === "USER_NOT_AVAILABLE")
      return res.status(400).send({ message: "USER_NOT_AVAILABLE" });

    return res.status(200).send({ message: "SUCCESSFUL_TRANSACTION" });
  } catch (error) {
    return res.status(500).send(handleHttp(res, "ERROR_POST_USER", error));
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
