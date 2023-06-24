import { Request, Response } from "express";
import {
  deletedRoleService,
  getRoleService,
  getRolesService,
  postRolesService,
  updateRoleService,
} from "../services/role.service";
import { handleHttp } from "../../../utils/error.handle";

const getRolesCtrl = async (req: Request, res: Response) => {
  try {
    const rows = await getRolesService();
    if (!rows)
      return res.send({ message: "FAILED_TRANSACTION", data: rows[0] });
    return res.send({ message: "SUCCESSFUL_TRANSACTION", data: rows[0] });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_GET_ROLES"));
  }
};

const getRoleCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await getRoleService(id);
    if (rows.length <= 0)
      return res.status(400).send({ message: "NOT_FOUND_ROLE" });

    res.send(rows[0]);
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_GET_ROLE"));
  }
};

const putRoleCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const { name } = body;
    const data = await updateRoleService(id, name);
    const { rows, dataUpdate } = data;

    if (rows.affectedRows === 0)
      return res.status(404).send({ message: "ROLE_NOT_FOUND" });

    res.send({ message: "SUCCESSFUL_TRANSACTION", dataUpdate });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_UPDATE_ROLE"));
  }
};
const deletedRoleCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await deletedRoleService(JSON.parse(id));
    if (rows.affectedRow <= 0)
      return res.status(404).send({ message: "ROLE_NOT_FOUND" });

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_DELETED_ROLE"));
  }
};

const postRoleCtrl = async ({ body }: Request, res: Response) => {
  try {
    const rows = await postRolesService(body);
    if (rows) res.status(200).send({ message: "SUCCESSFUL_TRANSACTION" });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_POST_ROLE"));
  }
};

export {
  getRolesCtrl,
  getRoleCtrl,
  putRoleCtrl,
  deletedRoleCtrl,
  postRoleCtrl,
};
