import { Request, Response } from "express";
import User from "../models/User";

export const getUser =async(req:Request, res: Response)=>{
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}