import userServices from "../services/user-service";
import { Response,Request } from "express";
import bcrypt from 'bcrypt';

const userController =()=>{
    const userRegister = async(req:Request,res:Response)=>{
        const {username,email,password}=req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);

      const user = await userServices.CreateUser({
        username,
        email,
        password: hashedPassword,
      });

      res.status(200).json({
        message: 'User created successfully',
        user,
      });
        } catch (error) {
            console.log(error);
            res.send({message: error, status: 500})
        }
    }
return {userRegister};
}

export default userController();