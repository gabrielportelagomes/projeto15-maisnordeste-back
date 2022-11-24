import { colSessions } from "../database/collections.js";
import { v4 as tokenGenerator } from "uuid";

export async function postSignIn(req, res) {
  const user = res.locals.user;
  const token = tokenGenerator();
  try {
    await colSessions.insertOne({ token, userId: user._id });

    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
