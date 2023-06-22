import { pool } from "../../../common/mysql";
import { ROLE } from "../interface/role";

const postRolesService = async ({ id_role, role }: ROLE) => {
  const rows = await pool.query(
    "insert into role (id_role, role) values(?,?)",
    [id_role, role]
  );
  return rows;
};

const getRolesService = async () => {
  console.log("tambien");
  const response = await pool.query("SELECT * FROM role");

  return response;
};

const getRoleService = async (id: string) => {
  const rows = await pool.query("select * from role where od=? ", [id]);
  return rows;
};

const updateRoleService = async ({ id_role, role }: ROLE) => {
  const response = await pool.query("update role set role=? where id=?", [
    role,
    id_role,
  ]);
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  const dataUpdate = getRoleService(JSON.stringify(id_role));
  const data = {
    dataUpdate,
    rows,
  };
  return data;
};

const deletedRoleService = async (id: string) => {
  const response = await pool.query("deleted from role where id = ?", [id]);
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  return rows;
};

export {
  getRolesService,
  getRoleService,
  updateRoleService,
  deletedRoleService,
  postRolesService,
};
