import { config } from "dotenv";

config();
export const AWS_REGION = process.env.AWS_REGION;
export const TABLE_NAME = process.env.TABLE_NAME;
