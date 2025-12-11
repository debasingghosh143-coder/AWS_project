import express from "express";
import router from "./src/noticeRoute.mjs";

const app = express();

app.use(express.json());

app.use("/api/notices", router);

export default app;
