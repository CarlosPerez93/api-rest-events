import { ROLE } from "../../role/interface/role";

export interface AUTH extends ROLE {
  fk_user: number;
  username: string;
  password: string;
}
