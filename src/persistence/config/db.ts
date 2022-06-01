import { Pool as Pool } from "pg";
import {
  DB_USER,
  DB_USER_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
} from "../../config";

export const pool = new Pool({
  user: DB_USER,
  password: DB_USER_PASSWORD,
  host: DB_HOST,
  port: +DB_PORT,
  database: DB_DATABASE,
});



