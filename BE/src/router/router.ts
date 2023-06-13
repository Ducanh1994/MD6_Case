import {Router} from "express";

const router = Router();

router.use('/auth', userRouter);

export default router;