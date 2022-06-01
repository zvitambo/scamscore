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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastAnalysisStats = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
const getLastAnalysisStats = (domain) => __awaiter(void 0, void 0, void 0, function* () {
    let analysisStats = {
        harmless: 0,
        malicious: 0,
        suspicious: 0,
        undetected: 0,
        timeout: 0,
    };
    const uri_id = btoa(domain).replace(/=/g, "");
    yield axios_1.default
        .get(`${config_1.DATA_ANALYSIS_ENDPOINT_URL}${uri_id}`, {
        headers: {
            "x-apikey": config_1.DATA_ANALYSIS_ENDPOINT_API_KEY,
        },
    })
        .then((res) => {
        console.log(res.data.data.attributes.last_analysis_stats);
        analysisStats = Object.assign({}, res.data.data.attributes.last_analysis_stats);
    })
        .catch((err) => {
        throw new Error(err);
    });
    return analysisStats;
});
exports.getLastAnalysisStats = getLastAnalysisStats;
