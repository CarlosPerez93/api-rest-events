import { encrypt, verified } from "../../../utils/bscrypt.handle";
import { generateToken } from "../../../utils/jwt.handle";
import { PERSON } from "../../person/interface";
import { pool } from "../../../common/mysql";

const registerNewUser = async (item: PERSON) => {
  const { id_user, username, password, id_role } = item;
  console.log(item);

  const [rows] = await pool.query(
    "INSERT INTO user(id_user,username,password,fk_role) VALUES(3,'CarlosY','12345',2)"
    //[id_user, username, password, id_role]
  );
  return rows;
};

const loginUser = async ({ username, password }: PERSON) => {};

export { loginUser, registerNewUser };
