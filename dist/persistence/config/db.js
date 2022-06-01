"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const config_1 = require("../../config");
exports.pool = new pg_1.Pool({
    user: config_1.DB_USER,
    password: config_1.DB_USER_PASSWORD,
    host: config_1.DB_HOST,
    port: +config_1.DB_PORT,
    database: config_1.DB_DATABASE,
});
