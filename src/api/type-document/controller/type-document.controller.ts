import { Request, Response } from "express";
import {
  getTypeDocument,
  getTypeDocuments,
  postTypeDocument,
  updateTypeDocument,
  deleteTypeDocument,
} from "../services/type-document.service";
import { handleHttp } from "../../../utils/error.handle";
import { mySqlToJson } from "../../../utils/dataTreatmentMySql";

const postTypeDocumentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const rows = await postTypeDocument(body);
    if (rows) res.status(200).send({ message: "SUCCESSFUL_TRANSACTION" });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_POST_TYPE-DOCUMENT"));
  }
};

const getTypeDocumentsCTRL = async (req: Request, res: Response) => {
  try {
    const rows = await getTypeDocuments();
    const data = mySqlToJson(rows);
    if (data.length <= 0)
      return res.status(400).send({ message: "TYPE-DOCUMENT_NOT_FOUND" });
    return res.status(200).send({ message: "SUCCESSFUL_TRANSACTION", data });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_GET_TYPE-DOCUMENTS"));
  }
};

const getTypeDocumentCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await getTypeDocument(id);
    const data = mySqlToJson(rows);
    if (data.length <= 0)
      return res.status(400).send({ message: "TYPE-DOCUMENT_NOT_FOUND" });
    return res.status(200).send({ message: "SUCCESSFUL_TRANSACTION", data });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_GET_TYPE-DOCUMENT"));
  }
};

const updateTypeDocumentCtrl = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const { name } = body;
    const data = await updateTypeDocument(id, name);
    const { rows, dataUpdate } = data;

    if (rows.affectedRows === 0)
      return res.status(404).send({ message: "TYPE-DOCUMENT_NOT_FOUND" });

    res.send({ message: "SUCCESSFUL_TRANSACTION", dataUpdate });
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_UPDATE_TYPE-DOCUMENT"));
  }
};

const deleteTypeDocumentCTRL = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await deleteTypeDocument(JSON.parse(id));
    if (rows.affectedRow <= 0)
      return res.status(404).send({ message: "TYPE-DOCUMENT_NOT_FOUND" });

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send(handleHttp(res, "ERROR_DELETED_TYPE-DOCUMENT"));
  }
};

export {
  postTypeDocumentCtrl,
  getTypeDocumentsCTRL,
  deleteTypeDocumentCTRL,
  getTypeDocumentCtrl,
  updateTypeDocument,
  updateTypeDocumentCtrl,
};
