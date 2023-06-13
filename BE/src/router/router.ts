import adminRouter from "./adminRouter";

const router = (app) => {
    app.use('/admin', adminRouter)
}

export default router;