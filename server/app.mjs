import express, { json } from "express";
import router from "./src/noticeRoute.mjs";

const app = express();

app.use(express.json());

app.use("/api/notices", router);
app.use("/api/hello", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Lamda is running!",
  });
});

export default app;
