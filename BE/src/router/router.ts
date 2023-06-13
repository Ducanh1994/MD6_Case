import {Router} from "express";
import adminRouter from "./adminRouter";

const router = Router();

//Main Router 
router.use('/admin', adminRouter)

export default router;