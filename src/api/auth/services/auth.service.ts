import { encrypt, verified } from "../../../utils/bscrypt.handle";
import { generateToken } from "../../../utils/jwt.handle";
import { pool } from "../../../common/mysql";
import { AUTH } from "../interface copy/auth.interface";
import {
  mySqlToJson,
  decompressedData,
} from "../../../utils/dataTreatmentMySql";

const registerNewUser = async (item: AUTH) => {
  const { email, username, password } = item;
  const passEncrypt = await encrypt(password);
  const query = await pool.query("select * from user where username = ?", [
    username,
  ]);
  const usersJSON = mySqlToJson(query);

  if (usersJSON.length > 0) return "USER_NOT_AVAILABLE";

  const rows = await pool.query(
    "INSERT INTO user(email,username,password,fk_role) VALUES( ?,?,?,3) ",
    [email, username, passEncrypt]
  );
  return rows;
};

const loginUser = async ({ username, password }: AUTH) => {
  const checkIs = await pool.query("select * from user where username = ? ", [
    username,
  ]);
  const checksIsJSON = mySqlToJson(checkIs);

  const dataUser = decompressedData(checksIsJSON, username);
  const passwordHash = dataUser.password;
  const isCorrect: any = await verified(password, passwordHash);

  if (dataUser.username !== username) return "NOT_FOUNT_USER";
  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(dataUser);

  const data = {
    token: await token,
    user: checkIs[0],
  };

  return data;
};

export { loginUser, registerNewUser };
