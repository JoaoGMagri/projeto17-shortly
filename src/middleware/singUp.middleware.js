import bcrypt from 'bcrypt';
import { connection } from "../database/database.js";
import joi from "joi";

export async function singUpMD(req, res, next) {

    const { name, email, password, confirmPassword } = req.body;
    
    const signUpSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
        confirmPassword: joi.string().required()
    });
    
    const validation = signUpSchema.validate(req.body);
    if (validation.error) {
        return res.sendStatus(422);
    }

    try {

        if(password !== confirmPassword){
            res.sendStatus(422);
            return;
        }

        const userExists = await connection.query(`SELECT * FROM users WHERE email=$1`, [email]);
        if (userExists.rowCount > 0) {
            res.sendStatus(409);
            return; 
        }

        const passwordCrypt = bcrypt.hashSync(password, 10);

        const objSingUP = {
            name,
            email,
            password: passwordCrypt
        }

        req.objSingUP = objSingUP;

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    next();

}