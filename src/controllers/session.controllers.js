import {connection} from "../database/database.js";

export async function postSingUp(req, res) {

    const objSingUP = req.objSingUP;

    try {

        await collectionUsers.insertOne(objSingUP);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
/* export async function postSingIn(req, res) {

    const objSingIn = req.objSingIn;

    try {

        await collectionSessions.insertOne(objSingIn);
        res.send(objSingIn.token);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

} */