import { ROLE } from "../../role/interface/role";

export interface AUTH extends ROLE {
  username: string;
  password: string;
}
