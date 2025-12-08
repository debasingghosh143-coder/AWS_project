import serverlessExpress from "@vendia/serverless-express";
import app from "./app.mjs";

export const handler = serverlessExpress({ app });
