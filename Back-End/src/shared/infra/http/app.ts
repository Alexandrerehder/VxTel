import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import "express-async-errors";
// eslint-disable-next-line import-helpers/order-imports

import "@shared/container";

import { AppError } from "@shared/errors/AppError";
import createConnection from "@shared/infra/typeorm";

import swaggerFile from "../../../../swagger.json";

// import swaggerFile from "../../../swagger.json";

import { router } from "./routes";

const options: cors.CorsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET"],
};

createConnection();

const app = express();

app.use(cors(options));

app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server eror - ${err.message}`,
  });
});

export { app };
