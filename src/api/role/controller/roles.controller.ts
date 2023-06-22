import { Request, Response } from "express";
import { getRolesService } from "../services/role.service";
import { handleHttp } from "../../../utils/error.handle";

const getRolesCtrl = async (req: Request, res: Response) => {
  console.log("entro");

  try {
    const rows = await getRolesService();
    if (rows) {
    }
    return res.send({ message: "SUCCESSFUL_TRANSACTION", data: rows });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_GET_ROLES"));
  }
};
const getRoleCtrl = async (req: Request, res: Response) => {};
const putRoleCtrl = async (req: Request, res: Response) => {};
const deletedRoleCtrl = async (req: Request, res: Response) => {};
const postRoleCtrl = async (req: Request, res: Response) => {};

export {
  getRolesCtrl,
  getRoleCtrl,
  putRoleCtrl,
  deletedRoleCtrl,
  postRoleCtrl,
};
