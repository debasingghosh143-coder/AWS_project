import { Router } from "express";
import { createNotice, deleteNotice, getNotices } from "../controllers/noticeContrller.mjs";

const router = Router();

router.post("/create", createNotice);
router.get('/get-all', getNotices);
router.delete('/delete', deleteNotice);

export default router;
