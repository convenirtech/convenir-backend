import { Router } from "express";
import userControllers from "../controllers/user-controller";

const userRouter = Router();

userRouter.post('/register',userControllers.userRegister);

export default userRouter;