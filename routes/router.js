import { Router } from "express";
import deviation from "../controller/deviation.js";
import stats from "../controller/stats.js";

const router = Router();

router.route("/stats").get(stats);
router.route("/deviation").get(deviation);

export default router;