import express from "express";
import "express-async-errors";
import cors from "cors";
import swaggerUi from "swagger-ui-express";


import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import router from "./modules/index.js";
// @ts-ignore
import swaggerDoc from "./swagger.json" assert { type: "json" };

const app = express();
app
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  .use(cors())
  .use(express.json())
  .use(router)
  .use(errorHandlerMiddleware);

export default app;
