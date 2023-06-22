import { ROLE } from "../../role/interface/role";

export interface AUTH extends ROLE {
  id_user: number;
  username: string;
  password: string;
}
