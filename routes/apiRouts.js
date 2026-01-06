import express from "express";
import { getDataByPathParams } from "../controllers/getDataByPathParams.js";
import { getAllData } from "../controllers/getAllData.js";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);
apiRouter.get("/:field/:term", getDataByPathParams);
