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
exports.getScamScore = exports.calculateScamScore = void 0;
const utility_1 = require("../utility");
const services_1 = require("../services");
const calculateScamScore = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { domainname, timeRange } = req.body;
        if (domainname.length < 0 || !(0, utility_1.CheckIsValidDomain)(domainname))
            return res.status(400).json(`Invalid domain name ${domainname}`);
        const requestTime = new Date();
        const { harmless, malicious, suspicious, undetected, timeout } = yield (0, services_1.getLastAnalysisStats)(domainname);
        const scamscore = (100 / (harmless - undetected - timeout)) * (malicious + suspicious);
        yield (0, services_1.insertScamScore)(domainname, scamscore, requestTime);
        if (timeRange !== undefined) {
            const scamscoretrend = yield (0, services_1.getScamScoreTrend)(domainname, timeRange);
            return res.status(200).json({ scamscore: scamscore, scamscoretrend: scamscoretrend });
        }
        return res.status(200).json({ scamscore: scamscore });
    }
    catch (error) {
        throw error;
    }
});
exports.calculateScamScore = calculateScamScore;
const getScamScore = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { domainname, timeRange } = req.body;
        if (domainname.length < 0 || !(0, utility_1.CheckIsValidDomain)(domainname))
            return res.status(400).json(`Invalid domain name ${domainname}`);
        const scamscoretrend = yield (0, services_1.getScamScoreTrend)(domainname, timeRange);
        return res.status(200).json({ scamscoretrend: scamscoretrend });
    }
    catch (error) {
        throw error;
    }
});
exports.getScamScore = getScamScore;
