import {connection} from "../database/database.js";
import { customAlphabet } from 'nanoid'
import joi from "joi";

export async function postShorten(req, res) {

    const {url} = req.body;
    const objSession =req.userExists;

    const urlSchema = joi.object({
        url: joi.string().required()
    });

    const validation = urlSchema.validate(req.body);
    if (validation.error) {
        return res.sendStatus(422);
    }

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

        if(obj.rowCount === 0){
            return res.sendStatus(404);
        }

        res.send(obj.rows[0]).status(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function getShortenOpen(req, res) {

    const {shortUrl} = req.params
    
    try {

        const obj = await connection.query(`
            SELECT 
                id,
                url 
            FROM
                urls 
            WHERE
                "shortUrl"=$1
            ;
        `,
        [shortUrl]);
        
        if(obj.rowCount === 0){
            return res.sendStatus(404);
        }

        await connection.query(`
            UPDATE
                urls
            SET
                "visitCount" = "visitCount"+1
            WHERE
                id=$1
        `,
        [obj.rows[0].id]);

        console.log(obj.rows[0].url)

        res.redirect(obj.rows[0].url);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function deleteShorten(req, res) {

    const {id} = req.params
    const {idUser} =req.userExists.rows[0];

    try {

        const obj = await connection.query(`
            SELECT 
                *
            FROM
                urls 
            WHERE
                id=$1
            ;
        `,
        [id]);

        if(obj.rowCount === 0){
            return res.sendStatus(404);
        }
        if(idUser !== obj.rows[0].idUser){
            return res.sendStatus(401);
        }

        console.log(obj.rows);
        await connection.query(`
        DELETE FROM 
            urls 
        WHERE 
            id=$1;
        `,
        [id]);
        res.sendStatus(204);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}