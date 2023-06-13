import {Router} from 'express'
import AdminController from "../controller/adminController";

const adminRouter = Router()

adminRouter.post('/createAccount', AdminController.createAccount);

export default adminRouter