import express, {Request, Response, NextFunction} from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import { PORT } from "./config";

import {ScoreRoute} from './routes';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/score", ScoreRoute);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});