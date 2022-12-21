import bcrypt from 'bcrypt';
import { connection } from "../database/database.js";

export async function singUpMD(req, res, next) {

    const { name, email, password, confirmPassword } = req.body;

    try {

        if(password !== confirmPassword){
            return res.status(422);
        }

        const userExists = await connection.query("SELECT * FROM users WHERE email=$1", [email]);
        if (userExists.rowCount !== 0) {
            return res.status(409);
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