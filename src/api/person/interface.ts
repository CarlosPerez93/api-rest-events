import { AUTH } from "../auth/interface copy/auth.interface";

export interface PERSON extends AUTH {
  id_person: number;
  first_name: string;
  middle_name: string;
  first_last_name: string;
  middle_last_name: string;
  number_document: number;
}
