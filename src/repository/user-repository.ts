import { IUser, User } from "../models/user-model";

const userRepository = () => {
    const createUser = async ({ email, username, password }: IUser) => {
        await User.create({
            data: {
                email, username, password
            },
        })
    };
    const getUsers = async () => {
        await User.findMany();
    }
    const getUserById = async({id}:IUser)=>{
        await User.findUnique({
            where: {
                id:id,
            },
        })
    };
    const getUserByEmailAndPassword =async ({email,password}:IUser) => {
        await User.findFirst({
            where:{
                email,password,
            },
        })
    };
    const updateUserById =async ({id,email,username,password}:IUser) => {
        await User.update({
            where:{
                id
            },
            data: {
                email,username,password
            },
        });
    };
    const deleteUserById =async({id}:IUser)=>{
        await User.delete({
            where:{
                id
            },
        });
    };
    return {
        createUser,getUsers,getUserById,getUserByEmailAndPassword,updateUserById,deleteUserById
    }
};
export default userRepository();