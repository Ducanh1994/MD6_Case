import {Router} from 'express'
import AdminController from "../controller/adminController";

const adminRouter = Router()

//Router for Admin Specific Function. Modified to add more feature as more sprint progress
adminRouter.post('/createAccount', AdminController.createAccount);

export default adminRouter