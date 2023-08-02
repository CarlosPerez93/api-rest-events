import { Request, Response } from "express";
import {
  deleteTypeService,
  getTypeService,
  getTypeServices,
  postTypeService,
  updateTypeService,
} from "../service/type-service.service";
import { mySqlToJson } from "../../../utils/dataTreatmentMySql";
import { handleHttp } from "../../../utils/error.handle";

const postTypeServiceCTRL = async ({ body }: Request, res: Response) => {
  try {
    const rows = await postTypeService(body);
    const response = mySqlToJson(rows);
    if (response.affectedRows <= 0)
      return res.status(400).send(handleHttp(res, "REGISTER_NOT_FOUND"));

    return res.send({ message: "SUCCESSFUL_TRANSACTION" });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_POST_TYPE-DOCUMENT"));
  }
};

const getTypeServicesCTRL = async (req: Request, res: Response) => {
  try {
    const rows = await getTypeServices();
    const data = mySqlToJson(rows);
    if (data.length <= 0)
      return res.status(404).send({ message: "DATA_NOT_FOUND" });
    return res.status(200).send({ message: "SUCCESSFUL_TRANSACTION", data });
  } catch (error) {}
};
const getTypeServiceCTRL = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await getTypeService(id);
    const data = mySqlToJson(rows);
    if (data.length <= 0)
      return res.status(404).send({ message: "DATA_NOT_FOUND" });
    return res.status(200).send({ message: "SUCCESSFUL_TRANSACTION", data });
  } catch (error) {}
};

const updateTypeServiceCTRL = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const { type_service, unit_price, amount } = body;
    const data = await updateTypeService(id, type_service, unit_price, amount);
    const { rows, dataUpdate } = data;

    if (rows.affectedRows === 0)
      return res.status(404).send({ message: "TYPE-SERVICE_NOT_UPDATED" });

    res.send({ message: "SUCCESSFUL_TRANSACTION", dataUpdate });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_UPDATE_TYPE-SERVICE"));
  }
};

const deleteTypeServiceCTRL = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await deleteTypeService(JSON.parse(id));

    if (rows.affectedRows === 0)
      return res.status(404).send({ message: "DATA_NOT_FOUND" });

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_DELETED_TYPE-SERVICE"));
  }
};

export {
  postTypeServiceCTRL,
  getTypeServicesCTRL,
  getTypeServiceCTRL,
  updateTypeServiceCTRL,
  deleteTypeServiceCTRL,
};
