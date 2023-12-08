import userRepository from "../repository/user-repository";
import { IUser } from '../models/user-model';

const userService =()=>{
    const CreateUser = async({username,email,password}:IUser) =>{
        const user = await userRepository.createUser({username,email,password});
        return user;
    };
    const GetUsers = async({}:IUser)=>{
        const users = await userRepository.getUsers();
        return users;
    }
    return {
        CreateUser,GetUsers
    }
}

export default userService();