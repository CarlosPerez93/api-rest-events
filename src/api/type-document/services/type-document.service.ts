import { pool } from "../../../common/mysql";
import { TYPE_DOCUMENT } from "../interface/type-document";

const postTypeDocument = async ({ type_document }: TYPE_DOCUMENT) => {
  const rows = await pool.query(
    "insert into type_document ( type_document ) values(?)",
    [type_document]
  );
  return rows;
};
const getTypeDocument = async (id: string) => {
  const rows = pool.query(
    "select * from type_document where id_type_document = ? ",
    [id]
  );
  return rows;
};
const getTypeDocuments = async () => {
  const rows = pool.query("select * from type_document");
  return rows;
};

const updateTypeDocument = async (id: string, type_document: string) => {
  const response = await pool.query(
    "update type_document set type_document=? where  id_type_document = ?",
    [type_document, id]
  );
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  const [dataUpdate] = await getTypeDocument(id);
  const data = {
    rows,
    dataUpdate,
  };
  return data;
};

const deleteTypeDocument = async (id: string) => {
  const response = await pool.query(
    "delete from type_document where id_type_document = ?",
    [id]
  );
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  return rows;
};

export {
  getTypeDocument,
  getTypeDocuments,
  postTypeDocument,
  updateTypeDocument,
  deleteTypeDocument,
};
