import express from 'express';
import {calculateScamScore, } from '../controllers';

const router = express.Router();

router.get("/", calculateScamScore);


export {router as ScoreRoute};