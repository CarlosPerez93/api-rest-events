import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaceGlobal/req-ext";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("YOU_NOT_HAVE_JWT_VALID ");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log(e);

    res.status(400);
    res.send("SESSION_NOT_VALID");
  }
};

export { checkJWT };
