import { Request, Response } from "express";
import {
  getPersonsService,
  postPersonService,
} from "../services/person.service";
import { mySqlToJson } from "../../../utils/dataTreatmentMySql";
import { handleHttp } from "../../../utils/error.handle";

const postPersonCtrl = async ({ body }: Request, res: Response) => {
  const rows = await postPersonService(body);
  const response = mySqlToJson(rows);
  if (response.affectedRows <= 0)
    return res.status(400).send(handleHttp(res, "REGISTER_NOT_FOUND"));

  return res.send({ message: "SUCCESSFUL_TRANSACTION" });
};

const getPersonsCtrl = async (req: Request, res: Response) => {
  try {
    const rows = await getPersonsService();
    res.send(rows);
  } catch (error) {}
};

const getPersonCtrl = (req: Request, res: Response) => {};

const updatePersonCtrl = (req: Request, res: Response) => {};

const deletePersonCtrl = (req: Request, res: Response) => {};

export {
  postPersonCtrl,
  getPersonsCtrl,
  getPersonCtrl,
  updatePersonCtrl,
  deletePersonCtrl,
};
