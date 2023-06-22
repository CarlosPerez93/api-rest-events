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

/* pool.connect(function (err: any) {
  if (err) throw err;
  console.log("Connected to MySQL!");

  pool.query(role, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(user, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(typeDocument, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(person, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(events, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(typeService, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(service, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(eventUser, function (err: any, resul: any) {
    if (err) throw err;
  });
  pool.query(eventService, function (err: any, resul: any) {
    if (err) throw err;
  });
}); */
