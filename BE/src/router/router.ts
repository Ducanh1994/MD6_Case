import {Router} from "express";
import adminRouter from "./adminRouter";

const router = Router();

//Main Router. Modified if there is more entity
router.use('/admin', adminRouter)

export default router;