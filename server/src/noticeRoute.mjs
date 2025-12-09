import { Router } from "express";
import { createNotice, deleteNotice, getNotices } from "./noticeContrller.mjs";

const router = Router();

router.post("/create", createNotice);
router.get('/get-all', getNotices);
router.delete("/delete/:noticeId", deleteNotice);

export default router;
