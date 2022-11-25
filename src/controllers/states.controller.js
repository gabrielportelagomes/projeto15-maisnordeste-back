import { colStates } from "../database/collections.js";

export async function getStates(req, res) {
  try {
    const states = await colStates.find().toArray();

    res.send(states);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
