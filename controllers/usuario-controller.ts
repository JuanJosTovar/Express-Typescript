import { Request, Response } from "express";
import db from '../config/config-db'

 export const getUsuarios = (req: Request, res:Response)=>{
    db.query('SELECT * FROM users', (err: any, data: any) => {
        if(err){
            console.log(err);
        }else{
            res.json({
                data
            })
        }
    });
}
