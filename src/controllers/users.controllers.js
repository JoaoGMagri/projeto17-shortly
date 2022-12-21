import { connection } from "../database/database.js";

export async function getUsersMe(req, res) {

    const { idUser } = req.userExists.rows[0];

    try {

        const obj = await connection.query(`
        SELECT 
            users.id,
            users.name,
            COALESCE(SUM (urls."visitCount"), 0)::INTEGER as "visitCount",
            COALESCE(
                array_agg(
                    json_build_object(
                        'id', urls.id, 
                        'url', urls.url, 
                        'shortUrl', urls."shortUrl", 
                        'visitCount', urls."visitCount"
                    ) 
                ORDER BY urls."visitCount") 
                FILTER (where urls.id is not null), ARRAY[]::json[]
            ) as "shortenedUrls"
        FROM 
            users
        LEFT JOIN 
            urls
        ON 
            users.id=urls."idUser"
        WHERE 
            users.id=$1
        GROUP BY 
            users.id;
        `, [idUser]);
        res.send(obj.rows[0]).status(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}

export async function getRanking(req, res) {

    try {

        const obj = await connection.query(`
        SELECT 
            users.id, 
            users.name, 
            COUNT(urls."shortUrl") AS "linksCount", 
            COALESCE(SUM(urls."visitCount"), 0) AS "visitCount" 
        FROM 
            users 
        LEFT JOIN 
            urls 
        ON 
            users.id = urls."idUser" 
        GROUP BY 
            users.id 
        ORDER BY 
            "visitCount" DESC, 
            "linksCount" DESC 
            LIMIT 10;
        `);
        res.send(obj.rows).status(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}