import { ROLE } from "../../role/interface/role";

export interface AUTH extends ROLE {
  fk_user: number;
  email: string;
  username: string;
  password: string;
}
