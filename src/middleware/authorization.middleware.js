import {connection} from "../database/database.js";

export async function authorization(req, res, next) {

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    try {
        const userExists = await connection.query(`SELECT * FROM session WHERE token=$1`, [token]);
        console.log(userExists.rows);
        if(userExists.rowCount === 0) {
            return res.sendStatus(401);
        }
        req.userExists = userExists;
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    next();

}