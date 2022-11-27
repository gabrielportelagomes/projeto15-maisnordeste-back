import { ObjectId } from "mongodb";
import { colSessions } from "../database/collections.js";

export async function deleteSession(req, res) {
  const user = res.locals.user;

  try {
    const states = await colSessions.deleteOne({ userId: ObjectId(user._id) });

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
