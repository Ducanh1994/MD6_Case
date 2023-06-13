import {Router} from 'express'
import AdminController from "../controller/adminController";

const adminRouter = Router()

//Router for Admin Specific Function
adminRouter.post('/createAccount', AdminController.createAccount);

export default adminRouter