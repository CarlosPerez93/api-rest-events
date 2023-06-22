import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async (req: Request, res: Response) => {
  try {
    /*     const response = await registerNewUser(body); */
    console.log("222", req.body);

    /*   res.send(response); */
  } catch (error) {
    res.send({ message: `here! ${error}` });
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  /*   const response = await loginUser(body);

  if (response === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(response);
  } else {
    res.send(response);
  } */
};

export { loginCtrl, registerCtrl };
