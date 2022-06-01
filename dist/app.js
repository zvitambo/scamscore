"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)());
app.use("/score", routes_1.ScoreRoute);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(config_1.PORT, () => {
    console.log(`server started on port ${config_1.PORT}`);
});
