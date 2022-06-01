"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_DATABASE = exports.DB_PORT = exports.DB_HOST = exports.DB_USER_PASSWORD = exports.DB_USER = exports.DATA_ANALYSIS_ENDPOINT_API_KEY = exports.DATA_ANALYSIS_ENDPOINT_URL = exports.PORT = void 0;
exports.PORT = process.env.PORT || 5000;
exports.DATA_ANALYSIS_ENDPOINT_URL = process.env.DATA_ANALYSIS_ENDPOINT_URL ||
    "https://www.virustotal.com/api/v3/urls/";
exports.DATA_ANALYSIS_ENDPOINT_API_KEY = process.env.DATA_ANALYSIS_ENDPOINT_API_KEY ||
    "0913c4a236239fda53f8a8b972676414a71f86467bb68ae26573a6882a56b3fe";
exports.DB_USER = process.env.DB_USER ||
    "postgres";
exports.DB_USER_PASSWORD = process.env.DB_USER_PASSWORD ||
    "root";
exports.DB_HOST = process.env.DB_HOST ||
    "localhost";
exports.DB_PORT = process.env.DB_PORT ||
    5432;
exports.DB_DATABASE = process.env.DB_DATABASE || "domaindb";
