import {connection} from "../database/database.js";
import { customAlphabet } from 'nanoid'

export async function postShorten(req, res) {

    const {url} = req.body;
    const objSession =req.userExists;
    try {

        const nanoid = customAlphabet('1234567890abcdef', 6)
        const shortUrl = nanoid();

        await connection.query(`
            INSERT INTO 
                urls ("idUser", "shortUrl", url, "visitCount")
            VALUES
                ($1, $2, $3, $4);
        `,

        [objSession.rows[0].idUser, shortUrl, url, 0]);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function getShorten(req, res) {

    const {id} = req.params
    try {

        const obj = await connection.query(`
            SELECT 
                id, 
                "shortUrl", 
                url 
            FROM
                urls 
            WHERE
                id=$1
            ;
        `,
        [id]);
        res.send(obj.rows[0]).status(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}