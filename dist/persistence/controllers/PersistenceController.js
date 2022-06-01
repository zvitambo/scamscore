"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScamScoreTrend = exports.insertScamScore = void 0;
const config_1 = require("../config");
const insertScamScore = (domainname, scamscore, requestTime) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.pool.query(`INSERT INTO scamscores (domainname, scamscore, createddate) VALUES ($1, $2, $3) `, [domainname, scamscore, requestTime]);
    }
    catch (err) {
        throw new Error("Error inserting records");
    }
});
exports.insertScamScore = insertScamScore;
const getScamScoreTrend = (domainname, timerange) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const range = timerange.split(" ");
        const scamscorerange = yield config_1.pool.query(`SELECT domainname, scamscore, createddate as RequestTime FROM scamscores WHERE domainname = ($1) AND ( createddate >= ($2) AND createddate <=  ($3))`, [domainname, range[0], range[1]]);
        return scamscorerange.rows;
    }
    catch (err) {
        throw new Error("Error retrieving records");
    }
});
exports.getScamScoreTrend = getScamScoreTrend;
