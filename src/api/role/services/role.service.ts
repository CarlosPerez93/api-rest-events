import { pool } from "../../../common/mysql";
import { ROLE } from "../interface/role";

const postRolesService = async ({ role }: ROLE) => {
  const rows = await pool.query("insert into role ( role) values(?)", [role]);

  return rows;
};

const getRolesService = async () => {
  const response = await pool.query("SELECT * FROM role");
  return response;
};

const getRoleService = async (id: string) => {
  const rows = await pool.query("select * from role where id_role=? ", [id]);
  return rows;
};

const updateRoleService = async (id: string, role: string) => {
  const response = await pool.query("update role set role=? where id_role=?", [
    role,
    id,
  ]);
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  const [dataUpdate] = await getRoleService(id);
  const data = {
    dataUpdate,
    rows,
  };
  return data;
};

const deletedRoleService = async (id: string) => {
  const response = await pool.query("delete from role where id_role = ?", [id]);
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
