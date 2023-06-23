import "dotenv/config";
import {
  role,
  user,
  typeDocument,
  person,
  events,
  typeService,
  service,
  eventUser,
  eventService,
} from "./db/database";

import { createPool } from "mysql2/promise";
export const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

pool.query(role);
pool.query(user);
pool.query(typeDocument);
pool.query(person);
pool.query(events);
pool.query(typeService);
pool.query(service);
pool.query(eventUser);
pool.query(eventService);
