import { pool } from "../../../common/mysql";
import { mySqlToJson } from "../../../utils/dataTreatmentMySql";
import { TYPE_SERVICE } from "../interface/type-service";

const postTypeService = async (item: TYPE_SERVICE) => {
  const { type_service, unit_price, amount } = item;
  const sql = `insert into type_service (type_service, unit_price, amount) values(?,?,?)`;
  const rows = pool.query(sql, [type_service, unit_price, amount]);
  return rows;
};

const getTypeServices = async () => {
  const sql = `select * from type_Service`;
  const rows = await pool.query(sql);
  return rows;
};

const getTypeService = async (id: string) => {
  const sql = `select * from type_Service where id_type_service = ?`;
  const rows = await pool.query(sql, [id]);
  return rows;
};

const updateTypeService = async (
  id: string,
  type_service: string,
  unit_price: string,
  amount: string
) => {
  const sql = `update type_service set type_service=?, unit_price=?, amount =? where id_type_service = ? `;
  const response = await pool.query(sql, [
    type_service,
    unit_price,
    amount,
    id,
  ]);
  const rows = await mySqlToJson(response);
  const dataUpdate = await getTypeService(id);
  const data = {
    rows,
    dataUpdate,
  };
  return data;
};

const deleteTypeService = async (id: string) => {
  const sql = `delete from type_service where id_type_service = ?`;
  const response = await pool.query(sql, [id]);
  const rows = mySqlToJson(response);
  return rows;
};

export {
  postTypeService,
  getTypeServices,
  getTypeService,
  updateTypeService,
  deleteTypeService,
};
