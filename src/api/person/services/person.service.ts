import { pool } from "../../../common/mysql";
import { PERSON } from "../interface/interface";

const postPersonService = async (item: PERSON) => {
  const {
    first_name,
    middle_name,
    first_last_name,
    middle_last_name,
    number_document,
    fk_user,
  } = item;

  const sql = `insert into person(first_name, middle_name, first_last_name,middle_last_name, fk_type_document,number_document, fk_user) 
  values(?,?,?,?,1,?,?)`;

  const [rows] = await pool.query(sql, [
    first_name,
    middle_name,
    first_last_name,
    middle_last_name,
    number_document,
    fk_user,
  ]);

  return rows;
};
const getPersonsService = async () => {
  const [rows] = await pool.query("select * from person");

  return rows;
};

export { postPersonService, getPersonsService };
